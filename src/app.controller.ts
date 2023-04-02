import { Body, Controller, Get, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guards';
import { LoggingInterceptor } from './interceptors/logging.interceptors';
import { FreezePipe } from './pipes/freeze.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @UseGuards(AuthGuard) -> at route level
  // @UseInterceptors(LoggingInterceptor) -> at route level
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  // @UseGuards(FreezePipe) -> alternative way
  examplePost(
    @Body(new FreezePipe()) body: any
  ) {
    body.test = 32;    
  }
}
