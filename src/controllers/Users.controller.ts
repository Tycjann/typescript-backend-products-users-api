import BaseController from './base.controller';
import { UsersRepository } from '../repositories/UsersRepository.interface';
import { User } from '../interfaces/User.interface';

class UsersController extends BaseController<User> {
  constructor(private productsRepository: UsersRepository) {
    super(productsRepository);
  }

  findUserByFirstName(name: string): User {
    return this.productsRepository.findUserByFirstName(name);
  }

  findUserById(id: string): User {
    return this.productsRepository.findUserById(id);
  }
}

export default UsersController;