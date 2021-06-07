import { Module } from '@nestjs/common';
import { ParticipantsService } from './participants.service';
import { ParticipantsResolver } from './participants.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Participant } from './enitities/participants.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Participant])],
  providers: [ParticipantsService, ParticipantsResolver],
})
export class ParticipantsModule {}
