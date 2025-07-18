import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

@Injectable()
export class ChatService {
  private openAI: OpenAI;
  private defaultModel = 'gpt-3.5-turbo';

  constructor(private config: ConfigService) {
    const apiKey = config.get<string>('OPENAI_API_KEY');
    if (!apiKey) {
      throw new Error('Missing OPENAI_API_KEY in environment config');
    }

    this.openAI = new OpenAI({ apiKey });
  }

  async chatWithOpenAI(
    messages: ChatCompletionMessageParam[],
  ): Promise<string> {
    const model = this.config.get<string>('OPENAI_MODEL') || this.defaultModel;

    const response = await this.openAI.chat.completions.create({
      model,
      messages,
    });

    return response.choices[0].message?.content ?? '';
  }
}
