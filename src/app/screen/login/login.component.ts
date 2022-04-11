import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private LoginService: AuthServiceService,
    private authService: SocialAuthService,
    private auth: AuthServiceService,
    private Router: Router,
    private Toastr: ToastrService
    ) { }
  loginform: Array<any> = [];
  datagoole: any;
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
  ngOnInit(): void {
  }
  login() {
  
    this.LoginService.login(this.formlogin.value)
      .subscribe(res => {
          const {user} =res;
          localStorage.setItem("users", JSON.stringify(user))
          if (user.roles == "admin") {
            Swal.fire(
              'Đăng Nhập thành công',
              'Vui lòng click vào nút ok',
              'success'
            )
            setTimeout(()=>this.Router.navigate(['/admin']),1500)

          } else {
            setTimeout(()=>this.Router.navigate(['/']),1500)
            Swal.fire(
              'Đăng Nhập thành công',
              'Vui lòng click vào nút ok',
              'success'
            )
          }
      })
  }
  googleLogin() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(resp => {
        this.auth.loginGoogle(resp.email, resp.id, resp.name, resp.photoUrl)
          .subscribe(data => {
            Swal.fire(
              'Đăng Nhập thành công',
              'Vui lòng click vào nút ok',
              'success'
            )

          })
      })
  }



}
