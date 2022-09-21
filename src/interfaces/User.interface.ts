import {Roles} from '../enums/Roles.enum';

export interface User {
  id?: string;
  nameFirst: string;
  nameLast: string;
  email: string;
  dateBirth?: Date;
  address: Array<UserAddress>;
  role: Roles;
}

export interface UserAddress {
  country: string;
  city: string;
  street: string;
  houseNumber: string;
  apartmentNumber?: string
}