<template>
  <q-card class="full-width q-pa-md">
    <div class="text-h4 q-mb-sm">Create a new user</div>
    <div class="row justify-around">
      <div>
        <q-input v-model="user.first_name" label="First name" outlined dense class="q-mb-md" />
        <q-input v-model="user.last_name" label="Last name" outlined dense class="q-mb-md" />
      </div>
      <div>
        <q-input v-model="user.email" label="Email" outlined dense class="q-mb-md" />
        <q-input v-model="user.phone_number" label="Phone Number" outlined dense class="q-mb-md" />
      </div>
      <div>
        <q-input
          v-model="user.bank_account_number"
          label="Account Number"
          outlined
          dense
          class="q-mb-md"
        />
        <q-input
          v-model="user.date_of_birth"
          label="Date of birth"
          type="date"
          outlined
          dense
          class="q-mb-md"
        />
      </div>
    </div>
    <q-btn label="Create" color="primary" class="q-mt-md q-mr-sm" @click="createUser" />
    <q-btn label="Delete" color="negative" class="q-mt-md" @click="deleteFields" />
  </q-card>
</template>

<script setup lang="ts">
  import { ref } from "vue";

  const user = ref({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    bank_account_number: "",
  });

  const createUser = () => {
    console.log("user is:", user.value);
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
</script>

<style></style>
