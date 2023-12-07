import { Controller, Get, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findOne(@Query('email') email: string, @Query('number') number: string) {
    return this.userService.findOne(email, number);
  }
}
