import BaseController from './BaseController';
import { UsersRepository } from '../repositories/UsersRepository.interface';
import { User } from '../interfaces/User.interface';

class UsersController extends BaseController<User> {
  constructor(private productsRepository: UsersRepository) {
    super(productsRepository);
  }

  findUserById(id: string): User {
    return this.productsRepository.findUserById(id);
  }
}

export default UsersController;