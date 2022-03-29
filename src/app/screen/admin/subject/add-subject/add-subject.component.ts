import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  constructor(private http: HttpClient,private route: Router) { }
  ngOnInit(): void {
  }
  formSubject: FormGroup = new FormGroup({
    Name: new FormControl('', [
      Validators.required,
    ]),
    Code: new FormControl('', [
      Validators.required
    ]),
    Logo: new FormControl('', [
      Validators.required
    ])
  })

  addSubject() {
    this.http.post<any>("http://localhost:3001/subjects", this.formSubject.value)
     .subscribe(res=>{
         this.route.navigate(['admin/mon-hoc']);
     })
  }

}
