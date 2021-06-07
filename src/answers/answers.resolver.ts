import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AnswerType } from './type/answers.type';
import { AnswersService } from './answers.service';
import { CreateAnsDto } from './dto/answers.dto';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../common/auth-guard';
import { RolesGuard } from '../common/role.guard';
import { Roles } from '../common/roles.decorator';
import { Role } from '../user/entities/user-role.enum';

@Resolver(AnswerType)
@UseGuards(GqlAuthGuard)
export class AnswersResolver {
  constructor(private ansService: AnswersService) {}

  @Mutation(() => AnswerType)
  submitAns(@Args('createAnsDto') createAnsDto: CreateAnsDto) {
    return this.ansService.submitAns(createAnsDto);
  }

  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Query(() => [AnswerType])
  getAns(@Args('id') id: number) {
    return this.ansService.getUserAns(id);
  }
}
