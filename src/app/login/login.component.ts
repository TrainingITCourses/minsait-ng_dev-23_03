import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
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
    const control = this.form.controls[controlName];
    if (!control) return false;
    return control.invalid && (control.touched || control.dirty);
  }

  getErrorMessage(controlName: string): string {
    const control = this.form.controls[controlName];
    if (!control) return '';
    return JSON.stringify(control.errors);
  }
}

type Credentials = {
  email: string;
  password: string;
};
