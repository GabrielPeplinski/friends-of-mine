import {Contact} from "@interfaces/Contact";

class ContactModel implements Contact {
  name: string
  email: string;
  isFavorite: boolean;
  phoneNumber: string;

  constructor({name, email, isFavorite, phoneNumber}: Contact) {
    this.name = name;
    this.email = email;
    this.isFavorite = isFavorite;
    this.phoneNumber = phoneNumber;
  }
}

export default ContactModel;
