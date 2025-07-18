import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  public async chat(@Body('messages') messages) {
    return this.chatService.chatWithOpenAI(messages);
  }
}
