import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
@UseGuards(JwtAuthGuard)
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('register-device')
  registerDevice(@Body() dto: { userId: string; token: string; platform: string }) {
    return this.notificationsService.registerDeviceToken(dto.userId, dto.token, dto.platform);
  }

  @Post('send')
  send(@Body() dto: { userId: string; title: string; body: string }) {
    return this.notificationsService.sendPushToUser(dto.userId, dto.title, dto.body);
  }
}
