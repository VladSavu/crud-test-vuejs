import Customer from "@/domain/entities/Customer";

const STORAGE_KEY = "customers";

export class CustomerService {
  static getCustomers(): Customer[] {
    const customers = localStorage.getItem(STORAGE_KEY);
    return customers ? JSON.parse(customers) : [];
  }

  static addCustomer(customer: Customer): void {
    const customers = this.getCustomers();
    customers.push(customer);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customers));
  }

  static updateCustomer(index: number, customer: Customer): void {
    const customers = this.getCustomers();
    customers[index] = customer;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customers));
  }

  static deleteCustomer(index: number): void {
    const customers = this.getCustomers();
    customers.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customers));
  }

  static isUniqueCustomer(customer: Customer): boolean {
    const customers = this.getCustomers();
    return !customers.some(
      (c) =>
        c.firstname === customer.firstname &&
        c.lastname === customer.lastname &&
        c.dateOfBirth === customer.dateOfBirth
    );
  }

  static isUniqueEmail(email: string): boolean {
    const customers = this.getCustomers();
    return !customers.some((c) => c.email === email);
  }
}
