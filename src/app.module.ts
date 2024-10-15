import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './presentation/auth/auth.module';
import { UserModule } from './presentation/user/user.module';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'), // Lấy URL từ biến môi trường
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(  {isGlobal: true},),
    AuthModule,
    UserModule,

  ],
  controllers: [
    ],
  providers: [],
})
export class AppModule {}
