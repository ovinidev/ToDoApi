import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DataBaseModule } from './database/database.module';
import { httpModule } from './http/http.module';
import { authenticateUser } from './http/middlewares/authenticateUser';
import { ensureUserOwnerTask } from './http/middlewares/ensureUserOwnerTask';

@Module({
  imports: [httpModule, DataBaseModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(authenticateUser).forRoutes('tasks');
    consumer.apply(ensureUserOwnerTask).forRoutes('tasks/:taskId');
  }
}
