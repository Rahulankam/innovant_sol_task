import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const url = 'https://dev-api.wanasti.com/api/v1/user/login?lang=en&currencyCode=KW';

    const body = {
      email: this.email,
      phone: '',
      phoneCode: '965',
      password: this.password,
      deviceToken: '',
      deviceType: '',
      deviceModel: '',
      appVersion: '',
      osVersion: ''
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      
      'Authorization': 'dAwMpo/TAWLhFrwwr3Wzcmc8XTdmAgp6zmGLsFmJ9HAnEbTQAg937i/hqKFjtFVQ4TnQ2y6xlVSeTKy3VWcxvalwvmPq6qF7+UcLd3wBXYoVQ2Puj49mTweKh/v2Rvj9zyVjfbexFkjMNZ5XyGucmdOI6XMmI98Zvu38Jh1fOo8157YxlgCozKkonixczjGIn3RKLuv7v3gXDRl4irzRcS6lYKGJB8vfA847GUppsVjdZV9bAjADfqUP2Iyl6Nz8MOWrSHNy8tWqhM6mI165rCwH3xMv7HEexmsMO7Mi36c=s'
    });

    this.http.post(url, body, { headers }).subscribe({
      next: (res: any) => {
        console.log('Login success:', res);
        if (res.token) {
          localStorage.setItem('authToken', res.token);
        }
        this.router.navigate(['/dashboard']);
        // Example: Save token to localStorage
        
        localStorage.setItem('user',body.email);

        // Navigate or update UI
      },
      error: (err) => {
        alert("Login Failed " +err);
        console.error('Login failed:', err);
        this.error = err?.error?.message || 'Login failed. Check credentials.';
      }
    });
  }
    }
