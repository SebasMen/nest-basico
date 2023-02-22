import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from 'src/entities/user.entity';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users.dto';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      name: 'Sebastian',
      lastname: 'Meneses',
      job: 'developer',
      image: 'img.png',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    return user;
  }

  create(payload: CreateUserDto) {
    this.counterId++;

    const newUser = {
      id: this.counterId,
      ...payload,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUserDto) {
    const user = this.findOne(id);

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    const index = this.users.findIndex((item) => item.id === id);
    this.users[index] = {
      ...user,
      ...payload,
    };

    return this.users[index];
  }

  remove(id: number) {
    const index = this.users.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException(`User #${id} not found`);
    }
    this.users.splice(index, 1);

    return true;
  }
}
