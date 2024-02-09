import { PhoneNumberUtil, PhoneNumberType } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

export const validatePhoneNumber = (phoneNumber: string): boolean => {
  try {
    const number = phoneUtil.parse(phoneNumber, "US"); // Adjust the default region as necessary
    return (
      phoneUtil.isValidNumber(number) &&
      phoneUtil.getNumberType(number) === PhoneNumberType.MOBILE
    );
  } catch {
    return false;
  }
};

export const validateEmail = (email: string): boolean => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
};

export const validateBankAccountNumber = (accountNumber: string): boolean => {
  const regex = /^[0-9]{9,18}$/;
  return regex.test(accountNumber);
};
