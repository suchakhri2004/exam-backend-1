// src/users/users.service.ts
import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(user_id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { user_id }, select: ['user_id', 'username', 'password', 'role'] });
  }

  async create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }
  

  async update(user_id: number, user: User): Promise<User> {
    await this.usersRepository.update({ user_id }, user);
    return this.usersRepository.findOne({ where: { user_id }, select: ['user_id', 'username', 'password', 'role'] });
  }
  

  async remove(user_id: number): Promise<void> {
    const result = await this.usersRepository.delete({ user_id });
  
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${user_id} not found`);
    }
  }
}
