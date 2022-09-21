import BaseController from './base.controller';
import { ProductsRepository } from '../repositories/ProductsRepository.interface';
import { Product } from '../interfaces/Product.interface';

class ProductsController extends BaseController<Product> {
  constructor(private productsRepository: ProductsRepository) {
    super(productsRepository);
  }

  findProductByName(name: string): Product {
    return this.productsRepository.findProductByName(name);
  }

  findProductById(id: string): Product {
    return this.productsRepository.findProductByName(id);
  }
}

export default ProductsController;