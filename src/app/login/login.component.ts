import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  onLogin(credentials: Credentials) {
    console.log('Login ', credentials);
    this.httpClient.post(environment.apiUrl + '/login', credentials).subscribe(
      (data) => console.log('Login response', data),
      (err) => console.log('Login error', err)
    );
  }
}

type Credentials = {
  email: string;
  password: string;
};
