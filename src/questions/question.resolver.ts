import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { QuesType } from './type/question-type';
import { CreateQuesDto } from './dto/create-question.dto';
import { QuesService } from './ques.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../common/auth-guard';
import { GetUser } from '../user/get-user.decorator';
import { User } from '../user/entities/user.entities';
import { RolesGuard } from '../common/role.guard';
import { Roles } from '../common/roles.decorator';
import { Role } from '../user/entities/user-role.enum';

@Resolver(QuesType)
@UseGuards(GqlAuthGuard)
export class QuesResolver {
  constructor(private quesService: QuesService) {}

  // Create new question
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Mutation(() => QuesType)
  createQues(
    @Args('createQuesDto') createQuesDto: CreateQuesDto,
    @GetUser() user: User,
  ) {
    return this.quesService.createQues(createQuesDto, user);
  }

  // search question by quiz_id
  @Query(() => [QuesType])
  getQues(@Args('quiz_id') quiz_id: number) {
    return this.quesService.getques(quiz_id);
  }

  // update question status
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Mutation(() => QuesType)
  updateQues(@Args('id') id: number, @Args('status') status: boolean) {
    return this.quesService.updateQuesStatus(id, status);
  }
}
