import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaPromise } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/users')
  getUsers(): PrismaPromise<any> {
    return this.usersService.getUsers();
  }

  @Post('/users')
  createUser(@Body() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }
}
