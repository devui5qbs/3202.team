import { Controller,  } from '@nestjs/common';
import { AppService } from './app.service';
import { Body, Post, UsePipes, ValidationPipe } from '@nestjs/common';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
}
