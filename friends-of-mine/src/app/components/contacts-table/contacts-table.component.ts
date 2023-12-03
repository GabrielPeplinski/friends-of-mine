import {Component, Input} from '@angular/core';
import {ContactInterface} from "@interfaces/ContactInterface";
import {ContactService} from "@services/contact/contact.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent {
  @Input() contacts: ContactInterface[] = [];

  public constructor(private contactService: ContactService, private router: Router) {
  }

  async deleteContact(contact: ContactInterface): Promise<void> {
    const ans: boolean = confirm('Tem certeza que deseja excluir o contato?');

    if (ans) {
      (await this.contactService.destroy(contact.id)).subscribe({
        next: () => this.reloadPage(),
        error: (e) => console.error('Ocorreu um erro ao tentar excluir o contato - ', e)
      });
    }
  }

  reloadPage(): void {
    location.reload();
  }
}
