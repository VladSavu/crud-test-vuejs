<template>
  <q-card class="full-width q-pa-md">
    <div class="text-h4 q-mb-sm">Create a new user</div>
    <q-form @submit="createUser" @reset="deleteFields">
      <div class="row justify-around">
        <div>
          <q-input
            v-model="user.first_name"
            label="First name"
            outlined
            dense
            class="q-mb-md"
            :rules="[(val) => (val && val.length > 0) || 'Please insert your first name']"
          />
          <q-input
            v-model="user.last_name"
            label="Last name"
            outlined
            dense
            class="q-mb-md"
            :rules="[(val) => (val && val.length > 0) || 'Please insert your last name']"
          />
        </div>
        <div>
          <q-input
            v-model="user.email"
            label="Email"
            outlined
            dense
            class="q-mb-md"
            :rules="[
              (val) => (val && val.length > 0) || 'Please insert your email address',
              (val) => validateEmail(val) || 'Please enter a valid email address',
            ]"
          />
          <q-input
            v-model="user.phone_number"
            label="Phone Number"
            outlined
            dense
            class="q-mb-md"
            :rules="[
              (val) => (val && val.length > 0) || 'Please insert your phone number',
              (val) => validatePhoneNumber(val) || 'Please enter a valid phone number',
            ]"
          />
        </div>
        <div>
          <q-input
            v-model="user.bank_account_number"
            label="Account Number"
            type="number"
            outlined
            dense
            class="q-mb-md"
            :rules="[
              (val) => (val && val.length > 0) || 'Please insert your bank account number',
              (val) => validateBankAccountNumber(val) || 'Please enter a valid bank account number',
            ]"
          />
          <q-input
            outlined
            dense
            v-model="user.date_of_birth"
            mask="date"
            label="Date of birth"
            :rules="[
              (val) => (val && val.length > 0) || 'Please insert your date of birth',
              (val) => validateDateOfBirth(val) || 'Please enter a valid date of birth',
            ]"
          > 
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="user.date_of_birth" :options="dateOptions">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </div>
      <q-btn label="Create" type="submit" color="primary" class="q-mt-md q-mr-sm" />
      <q-btn label="Delete" type="reset" color="negative" class="q-mt-md" />
    </q-form>
  </q-card>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import {
    validateCustomer,
    validateDateOfBirth,
    validateEmail,
    validatePhoneNumber,
    validateBankAccountNumber,
  } from "src/services/VerificationService";
  import { Customer } from "./models";
  import { useCustomerStore } from "src/stores/customer-store";

  const customerStore = useCustomerStore();

  const user = ref<Partial<Customer>>({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    bank_account_number: "",
  });

  const createUser = () => {
    if (!validateCustomer(user.value as Customer)) {
      alert("Invalid user");
      deleteFields();
      return;
    }
    customerStore.createNewCustomer(user.value as Customer);
    deleteFields();
  };

  const deleteFields = () => {
    user.value = {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      date_of_birth: "",
      bank_account_number: "",
    };
  };

  const dateOptions = (date: any) => {
    return date < new Date().toISOString().split("T")[0].replace(/-/g, "/");
  };
</script>

<style></style>
