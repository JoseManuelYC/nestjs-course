import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidationUserPipe } from './validation-user/validation-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {
  @Get('/hello')
  index(@Req() req: Request, @Res() res: Response) {
    console.log(req.url);
    res.status(200).json({
      message: 'Hello world',
    });
  }
  @Get('notfound')
  @HttpCode(404)
  notfound() {
    return 'Not found page';
  }
  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num + 14;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidationUserPipe) query: { name: string; age: number }) {
    return `Hello ${query.name}, you are ${query.age} years old`;
  }
}
