<template>
  <div class="customer-item">
    <div class="customer-item__attribute">
      <span class="customer-item__label">Name:</span>
      <span class="customer-item__value">{{ customer.name }}</span>
    </div>
    <div class="customer-item__attribute">
      <span class="customer-item__label">Email:</span>
      <span class="customer-item__value">{{ customer.email }}</span>
    </div>
    <div class="customer-item__attribute">
      <span class="customer-item__label">Phone:</span>
      <span class="customer-item__value">{{ customer.phone }}</span>
    </div>
    <!-- Add more attributes here -->
  </div>
</template>

<script>
import Customer from '@/domain/entities/Customer';
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  name: 'CustomerItem',
  props: {
    customer: {
      type: Customer,
      required: true
    }
  },
  setup(props) {
    const { customer } = toRefs(props);
    // No reactive state or methods to define in setup for this component,
    // since it purely depends on props passed to it.

    return { customer };
  }
});
</script>

<style scoped>

</style>