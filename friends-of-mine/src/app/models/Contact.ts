import {ContactInterface} from "@interfaces/ContactInterface";

class Contact implements ContactInterface {
  id?: number;
  name: string
  email: string;
  isFavorite: boolean;
  phoneNumber: string;

  constructor({name, email, isFavorite, phoneNumber}: ContactInterface) {
    this.name = name;
    this.email = email;
    this.isFavorite = isFavorite;
    this.phoneNumber = phoneNumber;
  }
}

export default Contact;
