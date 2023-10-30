import {Component, OnInit} from '@angular/core';
import {emailRegex, phoneNumberRegex} from "@utils/regex";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from "@services/contact/contact.service";
import Contact from "../../models/Contact";

@Component({
  selector: 'app-create-contact-page',
  templateUrl: './create-contact-page.component.html',
  styleUrls: ['./create-contact-page.component.css']
})

export class CreateContactPageComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(phoneNumberRegex)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(emailRegex)]),
      isFavorite: new FormControl(false)
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

  async submit() {
    if (this.contactForm.invalid)
      return;

    const newContact: Contact = new Contact({
      name: this.name.value,
      email: this.email.value,
      isFavorite: this.isFavorite.value,
      phoneNumber: this.phoneNumber.value
    });

    console.log(newContact);

    (await this.contactService.create(newContact)).subscribe({
      next: () => console.log('deu boa'),
      error: (e) => console.error('Erro ao criar desejo:', e)
    });
  }
}
