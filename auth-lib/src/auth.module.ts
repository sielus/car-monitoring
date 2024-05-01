import { DynamicModule, Global, Module } from '@nestjs/common';
import { Reflector } from "@nestjs/core";
import { JwtModule } from "@nestjs/jwt";
import { AuthGuard } from "./guard/auth.guard";
import { GraphqlAuthGuard } from "./guard/graphql-auth.guard";

@Global()
@Module({})
export class AuthModule {
    static register(jwtToken: string): DynamicModule {
        return {
            module: AuthModule,
            imports: [JwtModule.register({
                publicKey: jwtToken,
                signOptions: {algorithm: 'RS512'},
                global: true,
            }),], exports: [JwtModule, AuthGuard, GraphqlAuthGuard, Reflector],
            providers: [AuthGuard, GraphqlAuthGuard, Reflector]
        }

    }
}

