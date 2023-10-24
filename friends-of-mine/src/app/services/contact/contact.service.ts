import { Injectable } from '@angular/core';
import {Contact} from "@interfaces/Contact";

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private readonly localStorageKey: string = 'contacts';

  constructor() { }

  getLocalStorageContactContacts(): Contact[] {
    const contactsJson: string = localStorage.getItem(this.localStorageKey);

    return contactsJson ? JSON.parse(contactsJson) : [];
  }

  saveLocalStorageContact(contact: Contact): void {
    const contacts: Contact[] = this.getLocalStorageContactContacts();
    contacts.push(contact);
    localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
  }
}
