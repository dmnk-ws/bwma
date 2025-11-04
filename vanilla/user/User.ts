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

const user: IUser = {
  id: 1,
  firstname: "John",
  lastname: "Doe",
  address: {
    id: 1,
    street: "Example Str. 1",
    city: "Example City",
    state: "Example State",
    zip: "12345",
    country: "Example Country"
  },
  email: "john.doe@example.org",
  phone: "0123456789"
}

console.log(user);