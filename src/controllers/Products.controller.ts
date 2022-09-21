import BaseController from './BaseController';
import { ProductsRepository } from '../repositories/ProductsRepository.interface';
import { Product } from '../interfaces/Product.interface';

class ProductsController extends BaseController<Product> {
  constructor(private productsRepository: ProductsRepository) {
    super(productsRepository);
  }

  findProductByName(name: string): Product {
    return this.productsRepository.findProductByName(name);
  }
}

export default ProductsController;