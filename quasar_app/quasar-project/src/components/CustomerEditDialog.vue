<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-form @submit="onOKClick" @cancel="onCancel">
        <q-card-section>
          <div class="text-h4 q-pb-md">Edit customer</div>
          <q-input
            v-model="copy.first_name"
            label="First Name"
            outlined
            dense
            class="q-mb-md"
            :rules="[(val) => (val && val.length > 0) || 'Please insert your first name']"
          />
          <q-input
            v-model="copy.last_name"
            label="Last Name"
            outlined
            dense
            class="q-mb-md"
            :rules="[(val) => (val && val.length > 0) || 'Please insert your last name']"
          />
          <q-input
            v-model="copy.email"
            label="Email"
            outlined
            dense
            class="q-mb-md"
            :rules="[
              (val) => (val && val.length > 0) || 'Please insert your email',
              (val) => validateEmail(val) || 'Please enter a valid email',
            ]"
          />
          <q-input
            v-model="copy.phone_number"
            label="Phone Number"
            outlined
            dense
            class="q-mb-md"
            :rules="[
              (val) => (val && val.length > 0) || 'Please insert your phone number',
              (val) => validatePhoneNumber(val) || 'Please enter a valid phone number',
            ]"
          />
          <q-input
            v-model="copy.bank_account_number"
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
            v-model="copy.date_of_birth"
            mask="date"
            label="Date of birth"
            :rules="[
              (val) => (val && val.length > 0) || 'Please insert your date of birth',
              (val) => validateDateOfBirth(val) || 'Please enter a valid date of birth',
            ]"
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn color="secondary" label="Update" type="submit" />
          <q-btn color="primary" label="Cancel" type="cancel" @click="onDialogCancel" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
  import { useDialogPluginComponent } from "quasar";
  import { Customer } from "./models";
  import { ref, defineProps, defineEmits } from "vue";
  import {
    validateDateOfBirth,
    validateEmail,
    validatePhoneNumber,
    validateBankAccountNumber,
  } from "src/services/VerificationService";
  import { useCustomerStore } from "src/stores/customer-store";

  const props = defineProps<{
    customer: Customer;
  }>();

  const customerStore = useCustomerStore();

  const customerRef = ref<Customer>(props.customer);

  const copy = customerRef.value;

  const originalCustomer: Customer = { ...customerRef.value } as Customer;

  console.log("CustomerEditDialog", customerRef.value);

  defineEmits([
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits,
  ]);

  const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent();
  // dialogRef      - Vue ref to be applied to QDialog
  // onDialogHide   - Function to be used as handler for @hide on QDialog
  // onDialogOK     - Function to call to settle dialog with "ok" outcome
  //                    example: onDialogOK() - no payload
  //                    example: onDialogOK({ /*...*/ }) - with payload
  // onDialogCancel - Function to call to settle dialog with "cancel" outcome

  function onOKClick() {
    // on OK, it is REQUIRED to
    // call onDialogOK (with optional payload)
    // customerStore.updateCustomerByEmail(copyCustomer.email, copyCustomer);
    onDialogOK();
    // or with payload: onDialogOK({ ... })
    // ...and it will also hide the dialog automatically
  }

  function onCancel() {
    // on Cancel, it is REQUIRED to
    // call onDialogCancel
    customerStore.updateCustomerByEmail(originalCustomer.email, originalCustomer);

    onDialogCancel();
    // ...and it will also hide the dialog automatically
  }
</script>
