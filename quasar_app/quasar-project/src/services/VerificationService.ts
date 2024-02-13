import { Customer } from "src/components/models";
import { PhoneNumberUtil } from "google-libphonenumber";

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const convertDate = (date: string): string => {
  return new Date(Date.parse(date.replace(/-/g, " "))).toISOString().split("T")[0];
};

export const validateDateOfBirth = (dateOfBirth: string): boolean => {
  dateOfBirth = convertDate(dateOfBirth);
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const parsedDate = new Date(Date.parse(dateOfBirth.replace(/-/g, " ")));
  const currentDate = new Date();
  return dateRegex.test(dateOfBirth) && parsedDate < currentDate;
};

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  const phoneUtil = PhoneNumberUtil.getInstance();
  try {
    const number = phoneUtil.parseAndKeepRawInput(phoneNumber, "NL");
    return phoneUtil.isValidNumber(number);
  } catch (e) {
    return false;
  }
};

export const validateBankAccountNumber = (bankAccountNumber: string): boolean => {
  const bankAccountNumberRegex = /^[0-9]{9,18}$/;
  return bankAccountNumberRegex.test(bankAccountNumber);
};

export const validateCustomer = (customer: Customer): boolean => {
  customer.date_of_birth = convertDate(customer.date_of_birth);
  return (
    validateEmail(customer.email) &&
    validatePhoneNumber(customer.phone_number) &&
    validateDateOfBirth(customer.date_of_birth)
  );
};
