import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserDto {
  @Field()
  nickname: string;
  @Field()
  telephone: string;
  @Field()
  account: string;
  @Field()
  email: string;
  @Field()
  password: string;
}
