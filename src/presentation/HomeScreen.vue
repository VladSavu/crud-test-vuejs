<template>
  <div>
    <!-- Customer List -->
    <div v-for="customer in customers" :key="customer.id" class="customer-list">
      <span>{{ customer.firstname }} {{ customer.lastname }}</span>
      <span>{{ customer.dateOfBirth }}</span>
      <span>{{ customer.phoneNumber }}</span>
      <span>{{ customer.email }}</span>
      <span>{{ customer.bankAccountNumber }}</span>
      <button @click="openEditDialog(customer)">Edit</button>
      <button @click="openDeleteDialog(customer)">Delete</button>
    </div>

    <!-- Add Customer Form -->
    <form @submit.prevent="addCustomer">
      <input
        v-model="newCustomer.firstname"
        type="text"
        placeholder="First Name"
        required
      />
      <input
        v-model="newCustomer.lastname"
        type="text"
        placeholder="Last Name"
        required
      />
      <input
        v-model="newCustomer.dateOfBirth"
        type="date"
        placeholder="Date of Birth"
        required
      />
      <input
        v-model="newCustomer.phoneNumber"
        type="tel"
        placeholder="Phone Number"
        required
      />
      <input
        v-model="newCustomer.email"
        type="email"
        placeholder="Email"
        required
      />
      <input
        v-model="newCustomer.bankAccountNumber"
        type="text"
        placeholder="Bank Account Number"
        required
      />
      <button type="submit">Add Customer</button>
    </form>

    <!-- Edit Customer Dialog -->
    <dialog v-if="editDialogOpen">
      <form @submit.prevent="updateCustomer">
        <input
          v-model="selectedCustomer.firstname"
          type="text"
          placeholder="First Name"
          required
        />
        <input
          v-model="selectedCustomer.lastname"
          type="text"
          placeholder="Last Name"
          required
        />
        <input
          v-model="selectedCustomer.dateOfBirth"
          type="date"
          placeholder="Date of Birth"
          required
        />
        <input
          v-model="selectedCustomer.phoneNumber"
          type="tel"
          placeholder="Phone Number"
          required
        />
        <input
          v-model="selectedCustomer.email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          v-model="selectedCustomer.bankAccountNumber"
          type="text"
          placeholder="Bank Account Number"
          required
        />
        <button type="submit">Update Customer</button>
      </form>
    </dialog>

    <!-- Delete Customer Dialog -->
    <dialog v-if="deleteDialogOpen">
      <p>Are you sure you want to delete this customer?</p>
      <button @click="deleteCustomer">Yes</button>
      <button @click="closeDeleteDialog">No</button>
    </dialog>
  </div>
</template>

<script setup>
import {
  validateBankAccountNumber,
  validateEmail,
  validatePhoneNumber,
} from "@/infrastructure/ValidationUtils.ts";
import { ref } from "vue";

const customers = ref([]);
const newCustomer = ref({
  firstname: "",
  lastname: "",
  dateOfBirth: "",
  phoneNumber: "",
  email: "",
  bankAccountNumber: "",
});
const editDialogOpen = ref(false);
const deleteDialogOpen = ref(false);
const selectedCustomer = ref({});

const addCustomer = () => {
  if (
    newCustomer.value.firstname === "" ||
    newCustomer.value.lastname === "" ||
    newCustomer.value.dateOfBirth === "" ||
    newCustomer.value.phoneNumber === "" ||
    newCustomer.value.email === "" ||
    newCustomer.value.bankAccountNumber === ""
  ) {
    alert("All fields are required");
    return;
  }

  if (
    validateBankAccountNumber(newCustomer.value.bankAccountNumber) === false
  ) {
    alert("Invalid bank account number");
    return;
  }

  if (validateEmail(newCustomer.value.email) === false) {
    alert("Invalid email");
    return;
  }

  if (validatePhoneNumber(newCustomer.value.phoneNumber) === false) {
    alert("Invalid phone number");
    return;
  }

  customers.value.push({ ...newCustomer.value });

  Object.keys(newCustomer.value).forEach((key) => {
    newCustomer.value[key] = "";
  });
};

const openEditDialog = (customer) => {
  Object.assign(selectedCustomer.value, customer);
  editDialogOpen.value = true;
};

const updateCustomer = () => {
  const index = customers.value.findIndex(
    (c) => c.id === selectedCustomer.value.id
  );
  if (index !== -1) {
    customers.value.splice(index, 1, { ...selectedCustomer.value });
  }
  editDialogOpen.value = false;
};

const openDeleteDialog = (customer) => {
  Object.assign(selectedCustomer.value, customer);
  deleteDialogOpen.value = true;
};

const deleteCustomer = () => {
  const index = customers.value.findIndex(
    (c) => c.id === selectedCustomer.value.id
  );
  if (index !== -1) {
    customers.value.splice(index, 1);
  }
  deleteDialogOpen.value = false;
};

const closeDeleteDialog = () => {
  deleteDialogOpen.value = false;
};
</script>

<style scoped>
.customer-list {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>
