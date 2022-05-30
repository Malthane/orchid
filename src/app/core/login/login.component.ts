import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronCircleRight, faUser, faLock} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  loginData: any;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faChevronCircleRight =faChevronCircleRight;
  faUser = faUser;
  faLock = faLock;

  constructor(private AuthService: AuthService, private route: Router) {}

  ngOnInit(): void {
  }

  onLogin() {
    if (this.loginForm.valid)
      this.AuthService.proceedLogin(this.loginForm.value).subscribe((res) => {
        if(res!=null) {
          this.loginData = res;
          // console.log(this.loginData)
          localStorage.setItem('token', this.loginData.access_token)
          this.route.navigate([''])
        }
      });
  }

  onSubmit() {}
}
