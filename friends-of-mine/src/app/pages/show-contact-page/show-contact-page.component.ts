import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContactService} from "@services/contact/contact.service";
import {ContactInterface} from "@interfaces/ContactInterface";

@Component({
  selector: 'app-show-contact-page',
  templateUrl: './show-contact-page.component.html',
  styleUrls: ['./show-contact-page.component.css']
})
export class ShowContactPageComponent implements OnInit {
  contactId: number | string = '';
  public contact: ContactInterface | null = null;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.contactId = +params['id'];
      this.getContactById();
    });
  }

  async getContactById(): Promise<void> {
    (await this.contactService.show(this.contactId))
      .subscribe({
        next: (contact: ContactInterface) => this.contact = contact,
        error: (e) => console.error(e),
      })
  }

  async makeFavorite(contact: ContactInterface): Promise<void> {
    (await this.contactService.toggleFavorite(contact, contact.isFavorite))
      .subscribe({
        next: () => location.reload(),
        error: (e) => console.error(e),
      });
  }
}
