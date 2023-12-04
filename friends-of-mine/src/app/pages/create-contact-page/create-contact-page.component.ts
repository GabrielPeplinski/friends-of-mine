import {Component, OnInit} from '@angular/core';
import {emailRegex, phoneNumberRegex} from "@utils/regex";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from "@services/contact/contact.service";
import {Router} from "@angular/router";
import {ContactInterface} from "@interfaces/ContactInterface";

@Component({
  selector: 'app-create-contact-page',
  templateUrl: './create-contact-page.component.html',
  styleUrls: ['./create-contact-page.component.css']
})

export class CreateContactPageComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private contactService: ContactService, private router: Router) {}

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

  async submit(): Promise<void> {
    if (this.contactForm.invalid)
      return;

    const newContact: ContactInterface = this.contactForm.value as ContactInterface;

    console.log(newContact);

    (await this.contactService.store(newContact)).subscribe({
      next: () => this.successfullyCreated(),
      error: (e) => console.error('Ocorreu um erro ao tentar cadastrar o contato - ', e)
    });
  }

  successfullyCreated(): void {
    this.router.navigate(['']);
    alert('Contato cadastrado com sucesso!')
  }
}
