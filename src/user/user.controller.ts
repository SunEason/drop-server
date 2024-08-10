import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/create')
  create() {
    return this.userService.create({
      nickname: 'test111',
      telephone: '01012345678',
      account: 'test111',
      email: 'test@test.com',
      password: 'test',
    });
  }

  @Get('/remove')
  async remove() {
    return await this.userService.remove(
      '0c3bc19f-f330-49b1-b1fc-472bb3006e78',
    );
  }

  @Get('/update')
  async update() {
    return await this.userService.update(
      'ff771453-0edc-4f01-9c0f-31194792f14b',
      {
        nickname: 'test333',
      },
    );
  }

  @Get('/find')
  async find(): Promise<User> {
    return await this.userService.find('ff771453-0edc-4f01-9c0f-31194792f14b');
  }
}
