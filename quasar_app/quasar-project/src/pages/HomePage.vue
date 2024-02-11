<template>
  <div class="user-list">
    <div class="text-h3 q-mb-sm">Users list</div>
    <CustomerItem
      v-for="customer in customerStore.customers"
      v-bind:key="customer.id"
      :customer="customer"
    />
    <UserForm />
  </div>
</template>

<script setup>
  import CustomerItem from "src/components/CustomerItem.vue";
  import UserForm from "src/components/UserForm.vue";
  import { useCustomerStore } from "src/stores/customer-store";

  const customerStore = useCustomerStore();
  console.log(customerStore.customers[0]);
</script>

<style scoped>
  .user-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 20px;
  }
</style>
