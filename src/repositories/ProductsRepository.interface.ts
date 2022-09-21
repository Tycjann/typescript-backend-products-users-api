import { BaseRepository } from './BaseRepository.interface';
import { Product } from '../interfaces/Product.interface';

export interface ProductsRepository extends BaseRepository<Product> {
  findProductByName(name: string): Product;
  findProductById(id: string): Product;
}