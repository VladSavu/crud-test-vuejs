<template>
  <q-card class="q-mb-sm">
    <q-card-section class="q-pa-none">
      <q-item>
        <q-item-section>
          <q-item-label class="name-email">
            <div class="row items-center">
              <div class="q-mr-sm">Customer name:</div>
              <div class="text-h6">{{ customer.first_name }}</div>
            </div>
            <div class="row items-center">
              <div class="q-mr-sm">Email address:</div>
              <p class="q-ma-none">{{ customer.email }}</p>
            </div>
          </q-item-label>
        </q-item-section>
        <q-item-section side class="btn-group">
          <q-btn color="primary" label="Edit" @click="editCustomer" />
          <q-btn color="negative" label="Delete" @click="deleteCustomer" />
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
  import { ref, Ref } from "vue";
  import { Customer } from "src/components/models";

  const props = defineProps<{
    customer: Customer;
  }>();

  function editCustomer() {
    console.log("Edit customer");
  }

  function deleteCustomer() {
    console.log("Delete customer");
  }
</script>

<style scoped>
  .name-email {
    margin-bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: fit-content;
  }
  .q-card {
    width: 100%;
    max-height: fit-content;
  }
  .btn-group {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    height: fit-content;
  }
</style>
