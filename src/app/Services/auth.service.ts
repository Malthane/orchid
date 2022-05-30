import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  proceedLogin(credential: any) {
    return this.http.post('http://localhost:8000/auth/login', credential);
  }

  isUserLoggedIn() {
    return localStorage.getItem('token')!=null;
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }
}
