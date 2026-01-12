export class Contact {
  id?: string;
  last_name: string;
  first_name: string;
  email: string;
  mobile_number: number;

  constructor(
    last_name: string,
    first_name: string,
    email: string,
    mobile_number: number,
    id?: string
  ) {
    this.id = id;
    this.last_name = last_name;
    this.first_name = first_name;
    this.email = email;
    this.mobile_number = mobile_number;
  }

  getFullName(): string {
    return `${this.first_name}, ${this.last_name}`;
  }
}
