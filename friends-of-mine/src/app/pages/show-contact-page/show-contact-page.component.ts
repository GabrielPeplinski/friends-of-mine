import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-contact-page',
  templateUrl: './show-contact-page.component.html',
  styleUrls: ['./show-contact-page.component.css']
})
export class ShowContactPageComponent implements OnInit {
  contactId: number | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.contactId = +params['id'];
        alert('Foi utilizado o Id do usuário:' + this.contactId)
    });
  }
}
