import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CreditModule } from './credit/credit.module';
import { LlamaService } from './llama/llama.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CreditModule],
  controllers: [AppController],
  providers: [AppService, LlamaService],
})
export class AppModule {}
