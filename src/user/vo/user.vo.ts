import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserVo {
  @Field()
  id: string;
  @Field()
  nickname: string;
  @Field()
  telephone: string;
  @Field()
  account: string;
  @Field()
  email: string;
  @Field({ description: '密码' })
  password: string;
}
