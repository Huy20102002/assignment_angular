import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private http: HttpClient) { }
  arrRegister: Array<any> = [];
  formRegister: FormGroup = new FormGroup({
    email: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6)
    ])
  })
  register() {
    this.http.post<any>("http://localhost:3001/signin", this.formRegister.value)
      .subscribe(data => {
        console.log(data);
      })
  }




}
