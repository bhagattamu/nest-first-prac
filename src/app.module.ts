import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';
import { HelloworldController } from './helloworld/helloworld.controller';
import { HelloworldService } from './helloworld/helloworld.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, HelloworldController],
  providers: [AppService, CatsService, HelloworldService],
})
export class AppModule {}
