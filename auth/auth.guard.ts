import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from '@nestjs/common';
import { Observable} from 'rxjs';
import {JwtService} from '@nestjs/jwt';
import {ConfigService} from '@'  
  @Injectable()
  export class AuthGuard implements CanActivate {
   
    constructor(private.readonly.jwtService: jwtService) {}
    
    canActivate(
    context: ExecutionContext,
   ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request)

    if(token){
      throw new UnauthorizedException();

    }

    try {
      
    } catch{
      throw new UnauthorizedException();
    }

   }

   private extractTokenFromHeader(request: Request): string | undefined{
    const[type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token: undefined;
   }
}
