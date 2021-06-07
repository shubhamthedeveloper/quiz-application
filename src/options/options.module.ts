import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OptionResolver } from './option.resolver';
import { OptionService } from './option.service';
import { Option } from './entities/option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Option])],
  providers: [OptionResolver, OptionService],
})
export class OptionsModule {}
