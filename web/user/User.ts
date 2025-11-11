import {IAddress} from "./Address.js";

export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  address?: IAddress;
  email: string;
  phone: string;
}

export class User implements IUser {
  id: number;
  firstname: string;
  lastname: string;
  address: IAddress;
  email: string;
  phone: string;

  constructor(
    id: number = 42,
    firstname: string = "",
    lastname: string = "",
    address: IAddress,
    email: string = "",
    phone: string = "",
  ) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
    this.email = email;
    this.phone = phone;
  }
}