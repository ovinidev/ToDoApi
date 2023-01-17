import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/app/repositories/UserRepository';

@Injectable()
export class FindUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: string) {
    return await this.userRepository.findById(userId);
  }
}
