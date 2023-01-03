import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class LoginUserBody {
  @IsNotEmpty()
  @Length(6, 10)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
