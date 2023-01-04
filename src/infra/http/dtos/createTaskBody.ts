import { IsNotEmpty } from 'class-validator';

export class CreateTaskBody {
  @IsNotEmpty()
  name: string;
}
