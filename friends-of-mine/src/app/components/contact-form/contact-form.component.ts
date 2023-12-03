import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ContactInterface} from "@interfaces/ContactInterface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {emailRegex, phoneNumberRegex} from "@utils/regex";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(emailRegex)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(phoneNumberRegex)]],
      isFavorite: [false]
    });
  }

  ngOnInit(): void {
    this.contactForm.patchValue(this.model);
  }

  @Input() model: ContactInterface = {
    email: "", isFavorite: false, name: "", phoneNumber: ""
  }

  @Output() submit = new EventEmitter<ContactInterface>();

  submitForm(): void {
    if (this.contactForm.invalid)
      return;

    this.submit.emit(this.contactForm.value);
  }
}
