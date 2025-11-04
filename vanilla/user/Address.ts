export interface IAddress {
  id: number;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export class Address implements IAddress {
  id: number;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;

  constructor(
    id: number = 42,
    street: string = "",
    city: string = "",
    state: string = "",
    zip: string = "",
    country: string = "",
  ) {
    this.id = id;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.country = country;
  }
}