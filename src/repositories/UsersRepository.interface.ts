import { BaseRepository } from './BaseRepository.interface';
import { User } from '../interfaces/User.interface';

export interface UsersRepository extends BaseRepository<User> {
  findUserById(id: string): User;
  findUserByFirstName(name: string): User;
}