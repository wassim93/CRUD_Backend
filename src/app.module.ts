import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { ChangeController } from './change/change.controller';
import { ChangeModule } from './change/change.module';

@Module({
  imports: [UsersModule, ChangeModule],
})
export class AppModule {}
