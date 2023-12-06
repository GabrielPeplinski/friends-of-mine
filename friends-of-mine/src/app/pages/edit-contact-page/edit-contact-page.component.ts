import {Component, OnInit} from '@angular/core';
import {ContactInterface} from "@interfaces/ContactInterface";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactService} from "@services/contact/contact.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {emailRegex, phoneNumberRegex} from "@utils/regex";

@Component({
  selector: 'app-edit-contact-page',
  templateUrl: './edit-contact-page.component.html',
  styleUrls: ['./edit-contact-page.component.css']
})

export class EditContactPageComponent implements OnInit {
  contactForm!: FormGroup;
  contactId: number | string = '';
  public contact: ContactInterface | null = null;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.contactId = +params['id'];
      this.getContactById();
    });

    setTimeout((): void => {
      this.contactForm = new FormGroup({
        id: new FormControl(this.contact?.id),
        name: new FormControl(this.contact?.name, [Validators.required, Validators.minLength(5), Validators.maxLength(255)]),
        phoneNumber: new FormControl(this.contact?.phoneNumber, [Validators.required, Validators.pattern(phoneNumberRegex)]),
        email: new FormControl(this.contact?.email, [Validators.required, Validators.email, Validators.pattern(emailRegex)]),
        isFavorite: new FormControl(this.contact?.isFavorite)
      });
    });
  }

  async getContactById(): Promise<void> {
    (await this.contactService.show(this.contactId))
      .subscribe({
        next: (contact: ContactInterface): void => {
          this.contact = contact;
          this.contactForm.patchValue({
            id: contact.id,
            name: contact.name,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
            isFavorite: contact.isFavorite
          });
        },
        error: (e) => console.error(e),
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
    if (this.contactForm.invalid || !this.contact)
      return;

    const updatedContact: ContactInterface = this.contactForm.value as ContactInterface;

    console.log(updatedContact);

    (await this.contactService.update(this.contact?.id, updatedContact)).subscribe({
      next: () => this.successfullyUpdated(),
      error: (e) => console.error('Ocorreu um erro ao tentar editar o contato - ', e)
    });
  }

  successfullyUpdated(): void {
    this.router.navigate(['/contatos']);
    alert('Contato editado com sucesso!')
  }
}
