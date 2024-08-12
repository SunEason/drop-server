import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserType } from './dto/user.type';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => Boolean)
  async create(@Args('params') params: CreateUserDto): Promise<boolean> {
    return await this.userService.create(params);
  }

  @Query(() => UserType, { description: '使用id查询用户' })
  async find(@Args('id') id: string): Promise<UserType> {
    return await this.userService.find(id);
  }
}
