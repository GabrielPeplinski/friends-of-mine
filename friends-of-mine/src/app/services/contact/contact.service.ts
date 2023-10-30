import { Injectable } from '@angular/core';
import {ContactInterface} from "@interfaces/ContactInterface";

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private readonly localStorageKey: string = 'contacts';

  constructor() { }

  async getLocalStorageContactContacts(): Promise<ContactInterface[]> {
    const contactsJson: string | null = localStorage.getItem(this.localStorageKey);

    return contactsJson ? JSON.parse(contactsJson) : [];
  }

  async saveLocalStorageContact(contact: ContactInterface): Promise<void> {
    const contacts: ContactInterface[] = await this.getLocalStorageContactContacts();
    contacts.push(contact);
    localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
  }
}
