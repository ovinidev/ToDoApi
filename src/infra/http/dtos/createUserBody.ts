import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @Length(6, 10)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
