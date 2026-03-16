import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { PrismaService } from '../../database/prisma/prisma.service';

@Injectable()
export class NotificationsService {
  private initialized = false;

  constructor(private readonly prisma: PrismaService) {
    if (process.env.FIREBASE_PROJECT_ID && !admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
      });
      this.initialized = true;
    }
  }

  async registerDeviceToken(userId: string, token: string, platform: string) {
    return this.prisma.deviceToken.upsert({
      where: { token },
      update: { userId, platform },
      create: { userId, token, platform },
    });
  }

  async sendPushToUser(userId: string, title: string, body: string) {
    const tokens = await this.prisma.deviceToken.findMany({ where: { userId } });
    if (!this.initialized || tokens.length === 0) {
      return { sent: 0, reason: 'FCM não configurado ou usuário sem token' };
    }

    const result = await admin.messaging().sendEachForMulticast({
      tokens: tokens.map((item) => item.token),
      notification: { title, body },
    });

    return { sent: result.successCount, failed: result.failureCount };
  }
}
