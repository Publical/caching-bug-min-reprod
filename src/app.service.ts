import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async takesALittleLonger(): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return 'there we go';
  }
}
