import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  findByEmail(email: string) {
    return this.usersRepository.findByEmail(email);
  }

  findById(id: string) {
    return this.usersRepository.findById(id);
  }

  async create(dto: CreateUserDto) {
    const passwordHash = await bcrypt.hash(dto.password, 10);
    return this.usersRepository.create({
      name: dto.name,
      email: dto.email,
      passwordHash,
      role: dto.role,
    });
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  async update(id: string, dto: UpdateUserDto) {
    return this.usersRepository.update(id, dto);
  }

  async resetPassword(id: string, dto: ResetPasswordDto) {
    const user = await this.usersRepository.findById(id);
    if (!user) throw new NotFoundException('Usuário não encontrado');
    const passwordHash = await bcrypt.hash(dto.newPassword, 10);
    return this.usersRepository.update(id, { passwordHash });
  }

  remove(id: string) {
    return this.usersRepository.delete(id);
  }
}
