import {Component, OnInit} from '@angular/core';
import {ContactService} from "@services/contact/contact.service";
import {Router} from "@angular/router";
import {ContactInterface} from "@interfaces/ContactInterface";

@Component({
  selector: 'app-list-contacts-page',
  templateUrl: './list-contacts-page.component.html',
  styleUrls: ['./list-contacts-page.component.css']
})

export class ListContactsPageComponent implements OnInit {
  public contacts: ContactInterface[] = [];

  constructor(private contactService: ContactService, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    const params: string = '';

    (await this.contactService.index(params))
      .subscribe({
        next: (contacts: ContactInterface[]) => this.contacts = contacts,
        error: (e) => console.error(e),
      })
  }
}
