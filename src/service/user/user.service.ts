import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async findOne(username: string) {
    return await this.userRepository.findOne(username);
  }

  async getOne(id: number) {
    return await this.userRepository.getOne(id);
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOneByEmail(email);
  }
}
