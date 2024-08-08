import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    comment: '用户昵称',
    default: '',
  })
  @IsNotEmpty()
  nickname: string;

  @Column({
    comment: '用户描述',
    default: '',
  })
  desc: string;

  @Column({
    comment: '用户电话',
    nullable: false,
  })
  telephone: string;

  @Column({
    comment: 'email',
    nullable: false,
  })
  email: string;

  @Column({
    comment: '账号',
    nullable: false,
  })
  account: string;

  @Column({
    comment: '用户密码',
    nullable: false,
  })
  password: string;
}
