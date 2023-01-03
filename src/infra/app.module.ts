import { Module } from '@nestjs/common';
import { DataBaseModule } from './database/database.module';
import { httpModule } from './http/http.module';

@Module({
  imports: [httpModule, DataBaseModule],
})
export class AppModule {}
