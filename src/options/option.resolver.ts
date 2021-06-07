import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { OptionType } from './type/option.type';
import { CreateOptionDto } from './dto/option.dto';
import { OptionService } from './option.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../common/auth-guard';
import { RolesGuard } from '../common/role.guard';
import { Roles } from '../common/roles.decorator';
import { Role } from '../user/entities/user-role.enum';

@Resolver(OptionType)
@UseGuards(GqlAuthGuard)
export class OptionResolver {
  constructor(private optService: OptionService) {}

  // create MCQ options
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Mutation(() => OptionType)
  createOption(@Args('createOptionDto') createOptionDto: CreateOptionDto) {
    return this.optService.createOption(createOptionDto);
  }

  @Query(() => [OptionType])
  getOption(@Args('ques_id') ques_id: number) {
    return this.optService.getOpt(ques_id);
  }

  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Mutation(() => OptionType)
  updateOption(@Args('id') id: number, @Args('status') status: boolean) {
    return this.optService.updateOptStatus(id, status);
  }
}
