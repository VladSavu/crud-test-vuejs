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
          phone_number: "1234567890",
          email: "john@doe.com",
        },
        {
          first_name: "Jane",
          last_name: "Doe",
          date_of_birth: "1990-01-01",
          phone_number: "1234567890",
          email: "jane@doe.com",
        },
        {
          first_name: "Jim",
          last_name: "Doe",
          date_of_birth: "1990-01-01",
          phone_number: "1234567890",
          email: "jim@doe.com",
        },
      ],
    } as RootState),
  getters: {
    // getCustomers: (state) => state.counter * 2,
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
    deleteCustomer(index: number) {
      if (!index) return;
      this.customers.splice(index, 1);
    },
  },
});
