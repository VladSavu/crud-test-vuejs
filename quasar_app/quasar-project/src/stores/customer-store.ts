import { defineStore } from "pinia";
import { Customer } from "src/components/models";

export type RootState = {
  customers: Customer[];
};

export const useCustomerStore = defineStore("customer", {
  state: () =>
    ({
      customers: [
        {
          first_name: "John",
          last_name: "Doe",
          date_of_birth: "1990-01-01",
          phone_number: "0730835561",
          email: "john@doe.com",
          bank_account_number: "123456789",
        },
        {
          first_name: "Jane",
          last_name: "Doe",
          date_of_birth: "1990-01-01",
          phone_number: "0730835561",
          email: "jane@doe.com",
          bank_account_number: "123456789",
        },
        {
          first_name: "Jim",
          last_name: "Doe",
          date_of_birth: "1990-01-01",
          phone_number: "0730835561",
          email: "jim@doe.com",
          bank_account_number: "123456789",
        },
      ],
    } as RootState),
  getters: {
    getCustomers: (state) => state.customers,
  },
  actions: {
    createNewCustomer(customer: Customer) {
      if (!customer) return;
      this.customers.push(customer);
    },
    updateCustomer(index: number, customer: Customer) {
      if (!customer) return;
      if (index < 0) return;
      this.customers[index] = customer;
    },
    updateCustomerByEmail(email: string, customer: Customer) {
      if (!customer) return;
      const index = this.customers.findIndex((customer) => customer.email === email);
      if (index < 0) return;
      this.customers[index] = customer;
    },
    deleteCustomer(index: number) {
      if (!index) return;
      this.customers.splice(index, 1);
    },
    deleteCustomerByEmail(email: string) {
      if (!email) return;
      const index = this.customers.findIndex((customer) => customer.email === email);
      if (index < 0) return;
      this.customers.splice(index, 1);
    },
  },
});
