import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreditService } from './credit.service';
import { Express } from 'express';
// import { CreditProfileDTO } from './dto/credit-profile-dto';

@Controller('credit')
export class CreditController {
  constructor(private readonly creditService: CreditService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('upload')
  async uploadCreditReport(@UploadedFile() file: Express.Multer.File) {
    const text = await this.creditService.extractTextFromPDF(file);
    const structured = await this.creditService.parseCreditReport(text);
    const insights = await this.creditService.generateInsights(structured);
    return insights;
  }
}
