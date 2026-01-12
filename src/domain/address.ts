export class Address {
  id?: string;
  address: string;
  city: string;
  zip: string;
  country: string;

  constructor(
    address: string,
    city: string,
    zip: string,
    country: string,
    id?: string
  ) {
    this.id = id;
    this.address = address;
    this.city = city;
    this.zip = zip;
    this.country = country;
  }

  getFullAddress(): string {
    return `${this.address}, ${this.city}, ${this.zip}, ${this.country}`;
  }
}
