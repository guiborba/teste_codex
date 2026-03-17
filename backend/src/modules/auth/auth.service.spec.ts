import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  it('deve validar usuário e retornar tokens', async () => {
    const usersService: any = {
      findByEmail: async () => ({
        id: '1',
        role: 'ADMINISTRADOR',
        name: 'Admin',
        email: 'admin@escola.com',
        passwordHash: await bcrypt.hash('123456', 10),
      }),
      update: async () => ({}),
    };
    const jwtService = new JwtService({ secret: 'test' });
    const service = new AuthService(usersService, jwtService);

    const result = await service.login({ email: 'admin@escola.com', password: '123456' });

    expect(result.accessToken).toBeDefined();
    expect(result.refreshToken).toBeDefined();
    expect(result.user.email).toBe('admin@escola.com');
  });
});
