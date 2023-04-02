import { ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger } from "@nestjs/common";
import { Request, Response } from 'express';
import { statSync } from "fs";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(HttpExceptionFilter.name);

    catch(exception: HttpException, host: ArgumentsHost) {
        this.logger.log(`
            ${HttpExceptionFilter.name}::catch
        `);

        const context = host.switchToHttp();

        const request = context.getRequest<Request>();
        const response = context.getResponse<Response>();
        const status = exception.getStatus();

        response
            .status(status)
            .json({
                statusCode: status,
                timestamp: new Date().toISOString(),
                path: request.url,
            })
    }
}
