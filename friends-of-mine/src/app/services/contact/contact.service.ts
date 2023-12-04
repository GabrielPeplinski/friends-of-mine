import {Injectable} from '@angular/core';
import {ContactInterface} from "@interfaces/ContactInterface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environments";

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  private readonly localStorageKey: string = 'contacts';
  private readonly apiUrl: string = environment.apiBaseUrl + '/contacts'

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
  async store(contact: ContactInterface): Promise<Observable<any>> {
    return this.http.post<any>(this.apiUrl, contact);
  }

  async index(params?: any): Promise<Observable<ContactInterface[]>> {
    return this.http.get<any[]>(this.apiUrl, {params});
  }

  async show(contactId: number | string | null): Promise<Observable<ContactInterface>> {
    return this.http.get<any>(this.apiUrl + '/' + contactId);
  }

  async update(contact: ContactInterface): Promise<Observable<any>> {
    return this.http.put<any>(this.apiUrl + '/' + contact.id, contact);
  }

  async destroy(contactId: number | undefined): Promise<Observable<any>> {
    return this.http.delete<any>(this.apiUrl + '/' + contactId);
  }

  async toggleFavorite(contact: ContactInterface, isFavorite: boolean): Promise<Observable<any>> {
    const updatedContact = { isFavorite: !isFavorite };

    return this.http.put<any>(this.apiUrl + '/' + contact.id, updatedContact);
  }
}
