import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private AuthService: AuthServiceService,private Router: Router,private Toastr: ToastrService,private title: Title) { }
  arrRegister: Array<any> = [];
  formRegister: FormGroup = new FormGroup({
    name: new FormControl("", [
      Validators.required
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ]),
    roles: new FormControl("member"),
    StudentQuizs: new FormControl([])
    
  })
  ngOnInit(): void {
    this.title.setTitle("Trang Đăng Ký")

  }
  register() {
    this.AuthService.register(this.formRegister.value)
      .subscribe(data => {
        this.Router.navigate(['/login'])
        this.Toastr.success("Đăng Ký Thành Công");
      })
  }




}
