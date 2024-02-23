import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BotEntity } from './bot.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BotEntity]),
  ],
  providers: [],
})
export class BotModule { }