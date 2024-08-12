import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserVo } from './vo/user.vo';
import { UpdateUserDto } from './dto/update-user.dto';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Boolean, { description: '创建用户' })
  async create(@Args('params') params: CreateUserDto): Promise<boolean> {
    return await this.userService.create(params);
  }

  @Mutation(() => Boolean, { description: '更新用户' })
  async update(
    @Args('id') id: string,
    @Args('params') params: UpdateUserDto,
  ): Promise<boolean> {
    return await this.userService.update(id, params);
  }

  @Query(() => UserVo, { description: '使用id查询用户' })
  async find(@Args('id') id: string): Promise<UserVo> {
    return await this.userService.find(id);
  }

  @Mutation(() => Boolean, { description: '删除用户' })
  async remove(@Args('id') id: string): Promise<boolean> {
    return await this.userService.remove(id);
  }
}
