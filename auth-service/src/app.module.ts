import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { AuthModule } from 'src/auth/auth.module';
import { EventHandlerModule } from 'src/event-handler/event-handler.module';

@Module({
  imports: [
    AuthModule,
    EventHandlerModule,
    JwtModule.register({
      global: true,
      publicKey: process.env.JWT_PUBLIC,
      privateKey: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h', algorithm: 'RS512' },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AuthModule],
})
export class AppModule {}
