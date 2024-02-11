<template>
  <div class="user-list">
    <div class="text-h3">Users list</div>
    <CustomerItem :customer="{ first_name: 'Jane Doe', email: 'jane@doe.com' }" />
  </div>
</template>

<script setup>
  import CustomerItem from "src/components/CustomerItem.vue";

  
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
