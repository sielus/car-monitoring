import { CanActivate, Injectable, SetMetadata, } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { GuardAbstract } from "./guard.abstract";

@Injectable()
export class GraphqlAuthGuard extends GuardAbstract implements CanActivate {
    constructor(
        reflector: Reflector,
        jwtService: JwtService,
    ) {
        super(reflector, jwtService)
    }

    async canActivate(context: GqlExecutionContext): Promise<boolean> {
        const ctx = GqlExecutionContext.create(context);
        const requiredScopes = this.reflector.getAllAndOverride<string[]>(
            'scope',
            [context.getHandler(), context.getClass()],
        );
        return this.handleToken(ctx.getContext().req,requiredScopes)

    }

}

export const Scope = (...scope: string[]) => SetMetadata('scope', scope);
