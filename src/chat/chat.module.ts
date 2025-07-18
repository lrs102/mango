import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [ChatService, ConfigService],
  controllers: [ChatController],
})
export class ChatModule {}
