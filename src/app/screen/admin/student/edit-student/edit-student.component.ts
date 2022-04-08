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

  constructor(private StudentService: StudentService, private router: ActivatedRoute) { }
  
  formStudent: FormGroup = new FormGroup({
    
    name: new FormControl('',[
      Validators.required
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    username: new FormControl('',[
      Validators.required
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
   
  })
  ngOnInit(): void {
    this.getStudent();
  }
  getStudent(){
    this.router.params.subscribe(par=>{
      const {id} = par;
      this.StudentService.getIdStudent(id)
      .subscribe(res=>{
        this.formStudent.patchValue(res)
        console.log(res);
       })
    })
  }
  updateStudent(){
    // this.getStudent.updateStudent()
    console.log(2)
  }

}
