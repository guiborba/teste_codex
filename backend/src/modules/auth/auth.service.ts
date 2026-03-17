import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Credenciais inválidas');

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) throw new UnauthorizedException('Credenciais inválidas');

    return user;
  }

  private signAccessToken(userId: string, role: string) {
    return this.jwtService.sign({ sub: userId, role }, { expiresIn: '15m' });
  }

  private signRefreshToken(userId: string, role: string) {
    return this.jwtService.sign({ sub: userId, role, type: 'refresh' }, { expiresIn: '7d' });
  }

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto.email, dto.password);
    const accessToken = this.signAccessToken(user.id, user.role);
    const refreshToken = this.signRefreshToken(user.id, user.role);
    const refreshTokenHash = await bcrypt.hash(refreshToken, 10);
    await this.usersService.update(user.id, { refreshTokenHash });

    return {
      accessToken,
      refreshToken,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    };
  }

  async refresh(userId: string, refreshToken: string) {
    const user = await this.usersService.findById(userId);
    if (!user?.refreshTokenHash) throw new UnauthorizedException('Refresh token inválido');

    const valid = await bcrypt.compare(refreshToken, user.refreshTokenHash);
    if (!valid) throw new UnauthorizedException('Refresh token inválido');

    const accessToken = this.signAccessToken(user.id, user.role);
    const newRefreshToken = this.signRefreshToken(user.id, user.role);
    const refreshTokenHash = await bcrypt.hash(newRefreshToken, 10);
    await this.usersService.update(user.id, { refreshTokenHash });

    return { accessToken, refreshToken: newRefreshToken };
  }
}
