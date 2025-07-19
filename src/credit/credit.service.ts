import { Injectable } from '@nestjs/common';
import { LlamaService } from '../llama/llama.service';
import { CreditProfileDto } from './dto/credit-profile-dto';

@Injectable()
export class CreditService {
  constructor(private readonly llamaService: LlamaService) {}

  async extractTextFromPDF(file: Express.Multer.File): Promise<string> {
    // Use pdf-parse here
    return '';
  }

  async parseCreditReport(text: string): Promise<CreditProfileDto> {
    // Write a simple parser or regex-based extractor for now
  }

  async generateInsights(profile: CreditProfileDto): Promise<string> {
    const prompt = `Here is a credit report profile: ${JSON.stringify(profile)}. What are 3 trends or opportunities you see for improving credit or leveraging better terms?`;
    const res = await this.llamaService.query(prompt); // Talk to local Ollama server
    return res;
  }
}
