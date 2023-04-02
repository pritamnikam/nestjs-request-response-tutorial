import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { AuthGuard } from './guards/auth.guards';
import { LoggingInterceptor } from './interceptors/logging.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalInterceptors(new LoggingInterceptor())
  // app.useGlobalGuards(new AuthGuard())
  // app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
