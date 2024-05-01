import { Module } from '@nestjs/common';
import { Reflector } from "@nestjs/core";
import { JwtModule } from "@nestjs/jwt";
import { AuthGuard } from "./guard/auth.guard";
import { GraphqlAuthGuard } from "./guard/graphql-auth.guard";

@Module({
    imports: [JwtModule.register({
        publicKey: process.env.JWT_PUBLIC,
        signOptions: {algorithm: 'RS512'},
        global: true,
    }),],exports:[JwtModule,AuthGuard,GraphqlAuthGuard,Reflector],
    providers:[AuthGuard,GraphqlAuthGuard,Reflector]
})
export class AuthModule {
}
