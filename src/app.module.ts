import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestService } from './request.service';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guards';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RequestService, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(AuthenticationMiddleware)  // registering the middleware for handling authentication
    .forRoutes("*");                  // applicable to all request routes
  }
}
