// Customer interface
interface ICustomer {
  firstname: string;
  lastname: string;
  dateOfBirth: Date;
  phoneNumber: string;
  email: string;
  bankAccountNumber: string;
}

// Customer class definition
class Customer implements ICustomer {
  firstname: string;
  lastname: string;
  dateOfBirth: Date;
  phoneNumber: string;
  email: string;
  bankAccountNumber: string;

  constructor({
    firstname,
    lastname,
    dateOfBirth,
    phoneNumber,
    email,
    bankAccountNumber,
  }: ICustomer) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dateOfBirth = dateOfBirth;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.bankAccountNumber = bankAccountNumber;
  }

//   Method to validate email
  validateEmail(): boolean {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Simplified regex for demonstration
    return emailRegex.test(this.email);
  }

}

export default Customer;
