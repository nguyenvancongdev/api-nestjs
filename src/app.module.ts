import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [   
    TypeOrmModule.forRoot()
  ]
})
export class AppModule {}
