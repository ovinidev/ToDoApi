import { IsOptional } from 'class-validator';

export class UpdateTaskBody {
  @IsOptional()
  name: string;

  @IsOptional()
  status: string;
}
