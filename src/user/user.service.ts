import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: DeepPartial<User>): Promise<boolean> {
    const res = await this.userRepository.insert(createUserDto);
    if (res && res.raw.affectedRows > 0) {
      return true;
    }
    return false;
  }

  async remove(id: string) {
    const res = await this.userRepository.delete(id);
    if (res && res.affected > 0) {
      return true;
    }
    return false;
  }

  async update(id: string, updateUserDto: DeepPartial<User>): Promise<boolean> {
    const res = await this.userRepository.update(id, updateUserDto);
    if (res && res.affected > 0) {
      return true;
    }
    return false;
  }

  async find(id: string): Promise<User> {
    const res = await this.userRepository.findOneBy({ id: id });
    return res;
  }
}
