import { SetMetadata, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Context } from "node:vm";

export abstract class GuardAbstract{
    constructor(
        protected  reflector: Reflector,
        protected readonly jwtService: JwtService,
    ) {}


    protected async handleToken(request: Request,requiredScopes: string[]){
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new UnauthorizedException();
        }
        try {
            const user = await this.verifyToken(token);

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

    public async verifyToken(token: string) {
        return this.jwtService.verifyAsync(token);
    }
}

export const Scope = (...scope: string[]) => SetMetadata('scope', scope);
