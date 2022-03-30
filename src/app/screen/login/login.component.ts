import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authService: SocialAuthService,
    private auth: AuthServiceService) { }
  loginform: Array<any> = [];
  formlogin: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });
  login() {
  }
  googleLogin() {

    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(resp => {
        this.auth.login(resp.email, resp.id)
          .subscribe(data => {
          })
      })
  }


}
