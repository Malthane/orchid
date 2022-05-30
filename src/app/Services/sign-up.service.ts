import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor( private Http: HttpClient) { }

  signUp(credential: any) {
    return this.Http.post('http://localhost:8000/auth/register', credential)
  }
}
