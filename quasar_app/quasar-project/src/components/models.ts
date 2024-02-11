export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Customer {
  first_name?: string;
  last_name?: string;
  date_of_birth?: string;
  phone_number?: string;
  email?: string;
  bank_account_number?: string;
}
