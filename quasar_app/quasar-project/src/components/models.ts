export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface ICustomer {
  id: number;
  first_name?: string;
  last_name?: string;
  date_of_birth?: string;
  phone_number?: string;
  email?: string;
  bank_account_number?: string;
}

export class Customer implements ICustomer {
  static lastId = 0;
  id: number;
  first_name?: string;
  last_name?: string;
  date_of_birth?: string;
  phone_number?: string;
  email?: string;
  bank_account_number?: string;

  constructor(
    first_name?: string,
    last_name?: string,
    date_of_birth?: string,
    phone_number?: string,
    email?: string,
    bank_account_number?: string
  ) {
    this.id = ++Customer.lastId;
    this.first_name = first_name;
    this.email = email;
    this.last_name = last_name;
    this.date_of_birth = date_of_birth;
    this.phone_number = phone_number;
    this.bank_account_number = bank_account_number;
  }
}
