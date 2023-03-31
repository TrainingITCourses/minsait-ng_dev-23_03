import { HttpClient } from '@angular/common/http';
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

  constructor(
    formBuilder: FormBuilder,
    private formsService: FormsService,
    private httpClient: HttpClient
  ) {
    this.form = formBuilder.group({
      fullName: ['Mark Musk', [Validators.required, Validators.minLength(5)]],
      email: [
        'mark@tesla.es',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: [
        '1234',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
      repeatedPassword: [
        '1234',
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
    });
  }

  ngOnInit(): void {}

  onRegisterClick() {
    this.user = this.form.value;
    console.log('Register Click', this.user);
    this.httpClient
      .post<Token>('http://localhost:3000/users', this.user)
      .subscribe(
        (result) => console.log('Token received', result.accessToken),
        (error) => console.warn('Captured error', error)
      );
    console.log('Credentials Sent', this.user);
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

type Token = {
  accessToken: string;
  user: any;
};
