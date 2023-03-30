import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from '../core/forms.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  user: User = {
    fullName: '',
    email: '',
    password: '',
  };

  constructor(formBuilder: FormBuilder, private formsService: FormsService) {
    this.form = formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
      repeatedPassword: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
    });
  }

  ngOnInit(): void {}

  onRegisterClick() {
    this.user = this.form.value;
    console.log('Register Click', this.user);
  }

  showError(controlName: string): boolean {
    return this.formsService.showError(this.form, controlName);
  }

  getErrorMessage(controlName: string): string {
    return this.formsService.getErrorMessage(this.form, controlName);
  }
}

type User = {
  fullName: string;
  email: string;
  password: string;
};
