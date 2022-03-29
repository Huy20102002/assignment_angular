import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private studentServices: StudentService,private router: Router) { }
  // formStudent: any={
  //   username: "",
  //   password: "",
  //   fullname: "",
  //   email: "",
  //   gender: "",
  //   birthday:"",
  // }
  ngOnInit(): void {
  }
  formStudent: FormGroup = new FormGroup({
    username: new FormControl('',[
      Validators.required
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    fullname: new FormControl('',[
      Validators.required
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    gender: new FormControl('',[
      Validators.required
    ]),
    birthday: new FormControl('',[
      Validators.required
    ])
  })
  addStudent() {
    this.studentServices.addStudent(this.formStudent.value)
      .subscribe(res => {
         this.router.navigate(['/admin/sinh-vien']);
      })
  }

}
