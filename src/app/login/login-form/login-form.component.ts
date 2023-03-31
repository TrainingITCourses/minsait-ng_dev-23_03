import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/core/forms.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @Output() login = new EventEmitter<Credentials>();
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

  showError(controlName: string): boolean {
    return this.formsService.showError(this.form, controlName);
  }

  getErrorMessage(controlName: string): string {
    return this.formsService.getErrorMessage(this.form, controlName);
  }

  onLoginClick() {
    this.credentials = this.form.value;
    console.log('Login Click', this.credentials);
    this.login.emit(this.credentials);
  }
}
type Credentials = {
  email: string;
  password: string;
};
