import {Injectable} from '@angular/core';
import {ContactInterface} from "@interfaces/ContactInterface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private readonly localStorageKey: string = 'contacts';
  private readonly apiUrl: string = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) {
  }

  /*
   * Local Storage Contacts Functions
   */
  async getLocalStorageContactContacts(): Promise<ContactInterface[]> {
    const contactsJson: string | null = localStorage.getItem(this.localStorageKey);

    return contactsJson ? JSON.parse(contactsJson) : [];
  }

  async saveLocalStorageContact(contact: ContactInterface): Promise<void> {
    const contacts: ContactInterface[] = await this.getLocalStorageContactContacts();
    contacts.push(contact);
    localStorage.setItem(this.localStorageKey, JSON.stringify(contacts));
  }

  /*
   * API Contacts Functions
   */
  async create(contact: ContactInterface): Promise<Observable<any>> {
    return this.http.post<any>(this.apiUrl, contact);
  }
}
