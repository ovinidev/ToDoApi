import { Module } from '@nestjs/common';
import { httpModule } from './http/http.module';

@Module({
  imports: [httpModule],
})
export class AppModule {}
