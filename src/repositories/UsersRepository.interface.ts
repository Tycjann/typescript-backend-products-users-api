import { BaseRepository } from './BaseRepository.interface';
import { User } from '../interfaces/User.interface';

export interface UsersRepository extends BaseRepository<User> {
  findUserByName(name: string): User;
  findUserById(id: number): User;
}