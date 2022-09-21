import { UsersRepository } from './UsersRepository.interface';
import { User } from '../interfaces/User.interface';
import { nanoid } from 'nanoid';


export class UsersTableRepository implements UsersRepository {
  private users: Array<User> = [];

  getAllItems(): Array<User> {
    return this.users;
  }

  getItemById(id: string): User {
    return this.users.find(product => (product.id === id));
  }

  addItem(item: User): User {
    item.id = nanoid();
    return item;
  }

  updateItem(id: string, item: User): User {
    this.users = this.users.map(user => {
      if (user.id === id) {
        return {
          ...item,
          id: user.id,
        };
      }
      return user;
    });

    return this.getItemById(id);
  }

  deleteItem(id: string): boolean {
    this.users = this.users.filter(user => (user.id !== id));
    return true;
  }

  findUserById(id: string): User {
    return this.users.find(user => (user.id === id));
  }

}