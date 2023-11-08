import {Component, Input} from '@angular/core';
import {ContactInterface} from "@interfaces/ContactInterface";

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent {
  @Input() contacts: ContactInterface[] = [];

  public constructor() {
  }
}
