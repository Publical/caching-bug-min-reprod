import { CacheTTL, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @CacheTTL(0)
  getHello(): Promise<string> {
    return this.appService.takesALittleLonger();
  }
}
