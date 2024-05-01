import { CanActivate, ExecutionContext, Injectable, SetMetadata, } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { GuardAbstract } from "./guard.abstract";

@Injectable()
export class AuthGuard extends GuardAbstract implements CanActivate {
    constructor(
        reflector: Reflector,
        jwtService: JwtService,
    ) {
        super(reflector, jwtService)
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        const requiredScopes = this.reflector.getAllAndOverride<string[]>(
            'scope',
            [context.getHandler(), context.getClass()],
        );
        return this.handleToken(request,requiredScopes)
    }
}

export const Scope = (...scope: string[]) => SetMetadata('scope', scope);
