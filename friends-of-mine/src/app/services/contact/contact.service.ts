import { Injectable } from '@angular/core';
import {Contact} from "@interfaces/Contact";

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private readonly localStorageKey: string = 'contacts';

  constructor() { }

  async getLocalStorageContactContacts(): Promise<Contact[]> {
    const contactsJson: string | null = localStorage.getItem(this.localStorageKey);

    return contactsJson ? JSON.parse(contactsJson) : [];
  }

  async saveLocalStorageContact(contact: Contact): Promise<void> {
    const contacts: Contact[] = await this.getLocalStorageContactContacts();
    contacts.push(contact);
    localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
  }
}
