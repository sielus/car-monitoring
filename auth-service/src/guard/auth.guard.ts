import {
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const user = await this.authService.verifyToken({ token });

      const requiredScopes = this.reflector.getAllAndOverride<string[]>(
        'scope',
        [context.getHandler(), context.getClass()],
      );
      if (!requiredScopes) {
        return true;
      }
      request['user'] = user;
      return requiredScopes.some((scope) => user?.scope?.includes(scope));
    } catch {
      throw new UnauthorizedException();
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}

export const Scope = (...scope: string[]) => SetMetadata('scope', scope);
