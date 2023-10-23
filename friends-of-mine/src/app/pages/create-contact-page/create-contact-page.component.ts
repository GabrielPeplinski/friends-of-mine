import {Component, OnInit} from '@angular/core';
import {phoneNumberRegex} from "../../utils/regex";
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-contact-page',
  templateUrl: './create-contact-page.component.html',
  styleUrls: ['./create-contact-page.component.css']
})

export class CreateContactPageComponent implements OnInit {
  contactForm!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      id: new FormControl(''),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(phoneNumberRegex)]),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      isFavorite: new FormControl('')
    });
  }

  get phoneNumber() {
    return this.contactForm.get('phoneNumber')!;
  }

  get name() {
    return this.contactForm.get('name')!;
  }

  get email() {
    return this.contactForm.get('email')!;
  }

  get isFavorite() {
    return this.contactForm.get('isFavorite')!;
  }

  submit(): void {
    if (this.contactForm.invalid)
      return;
    else if (this.contactForm.valid)
    console.log('deu certo');
  }
}
