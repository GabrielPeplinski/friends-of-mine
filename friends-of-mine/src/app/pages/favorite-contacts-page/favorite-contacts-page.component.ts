import {Component, OnInit} from '@angular/core';
import {ContactInterface} from "@interfaces/ContactInterface";
import {ContactService} from "@services/contact/contact.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-favorite-contacts-page',
  templateUrl: './favorite-contacts-page.component.html',
  styleUrls: ['./favorite-contacts-page.component.css']
})
export class FavoriteContactsPageComponent implements OnInit{
  public contacts: ContactInterface[] = [];

  constructor(private contactService: ContactService) {
  }

  async ngOnInit(): Promise<void> {
    const params: HttpParams = new HttpParams().set('isFavorite', true);

    (await this.contactService.index(params))
      .subscribe({
        next: (contacts: ContactInterface[]) => this.contacts = contacts,
        error: (e) => console.error(e),
      })
  }
}
