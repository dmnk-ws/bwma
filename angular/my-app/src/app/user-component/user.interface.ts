export interface IUser {
  id: number;
  username: string;
  firstname: string;
  lastname: string;
  address?: IAddress;
  email: string;
  phone: string;
}

export interface IAddress {
  id: number;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
