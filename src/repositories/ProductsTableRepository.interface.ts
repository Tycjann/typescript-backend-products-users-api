import { ProductsRepository } from './ProductsRepository.interface';
import { Product } from '../interfaces/Product.interface';
import { nanoid } from 'nanoid';

export class ProductsTableRepository implements ProductsRepository {
  private products: Array<Product> = [];

  getAllItems(): Array<Product> {
    return this.products;
  }

  getItemById(id: string): Product {
    return this.products.find(product => (product.id === id));
  }

  addItem(item: Product): Product {
    item.id = nanoid();
    item.dateCreated = new Date();
    item.dateModified = new Date();
    this.products.push(item);
    return item;
  }

  updateItem(id: string, item: Product): Product {
    this.products = this.products.map(product => {
      if (product.id === id) {
        return {
          ...item,
          id: product.id,
          dateCreated: product.dateCreated,
          dateModified: new Date()
        };
      }
      return product;
    });

    return this.getItemById(id);
  }

  deleteItem(id: string): boolean {
    this.products = this.products.filter(product => (product.id !== id));
    return true;
  }

  findProductByName(name: string): Product {
    return this.products.find(product => (product.name === name));
  }

  findProductById(id: string): Product {
    return this.products.find(product => (product.id === id));
  }

}
