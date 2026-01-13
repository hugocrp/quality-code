export class Address {
  id?: string;
  address: string;
  city: string;
  zip: number;

  constructor(street: string, city: string, zip: number, id?: string) {
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

export class createAddressDTO {
  street: string;
  city: string;
  zip: number;

  constructor(street: string, city: string, zip: number) {
    this.street = street;
    this.city = city;
    this.zip = zip;
  }
}