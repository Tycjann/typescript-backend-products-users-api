import {Tags} from '../enums/Tags.enum';

export interface Product {
  id?: string;
  name: string;
  price: string;
  count: string;
  tags: Array<Tags>;
  dateCreated?: Date;
  dateModified?: Date;
}