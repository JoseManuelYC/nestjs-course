import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log(req.originalUrl);

    const { authorization } = req.headers;

    if (!authorization)
      throw new HttpException('Unathorized', HttpStatus.UNAUTHORIZED);

    if (authorization !== 'abc')
      throw new HttpException('Forbidden', HttpStatus.BAD_REQUEST);

    next();
  }
}
