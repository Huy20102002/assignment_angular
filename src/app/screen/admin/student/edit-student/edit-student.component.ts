import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private getStudent: StudentService, private router: ActivatedRoute) { }
  
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
  ngOnInit(): void {
    this.router.params.subscribe(par=>{
      const {id} = par;
      this.getStudent.getIdStudent(id)
      .subscribe(res=>{
       
       })
    })
  }
  updateStudent(){
    // this.getStudent.updateStudent()
  }

}
