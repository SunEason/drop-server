import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserVo } from './vo/user.vo';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Boolean)
  async create(@Args('params') params: CreateUserDto): Promise<boolean> {
    return await this.userService.create(params);
  }

  @Query(() => UserVo, { description: '使用id查询用户' })
  async find(@Args('id') id: string): Promise<UserVo> {
    return await this.userService.find(id);
  }
}
