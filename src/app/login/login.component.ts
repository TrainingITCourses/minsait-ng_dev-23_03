import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from '../core/forms.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  credentials: Credentials = {
    email: '',
    password: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private formsService: FormsService
  ) {
    this.form = formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
    });
  }

  ngOnInit(): void {}

  onLoginClick() {
    this.credentials = this.form.value;
    console.log('Login Click', this.credentials);
  }

  showError(controlName: string): boolean {
    return this.formsService.showError(this.form, controlName);
  }

  getErrorMessage(controlName: string): string {
    return this.formsService.getErrorMessage(this.form, controlName);
  }
}

type Credentials = {
  email: string;
  password: string;
};
