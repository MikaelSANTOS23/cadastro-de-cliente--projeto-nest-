import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(
      @Body('username') username: string,
      @Body('password') password: string
    ): AuthGuard {
      return this.authService.signIn(username, password);
    }
  }

