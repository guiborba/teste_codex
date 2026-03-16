import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '../src/modules/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/api/auth/login (POST) deve validar payload', () => {
    return request(app.getHttpServer()).post('/api/auth/login').send({}).expect(400);
  });

  afterAll(async () => {
    await app.close();
  });
});
