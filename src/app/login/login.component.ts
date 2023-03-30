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
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onLoginClick() {
    console.log('Login Click', this.form.value);
  }

  showError(controlName: string): boolean {
    const control = this.form.controls[controlName];
    if (!control) return false;
    return control.invalid && (control.touched || control.dirty);
  }
}

type Credentials = {
  email: string;
  password: string;
};
