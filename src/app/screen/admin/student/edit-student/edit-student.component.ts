import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private StudentService: StudentService, private router: ActivatedRoute, private title: Title, private route: Router) { }

  formStudent: FormGroup = new FormGroup({

    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),

  })
  ngOnInit(): void {
    this.title.setTitle("Trang Cập Nhật Sinh Viên");
    this.getStudent();
  }
  getStudent() {
    this.router.params.subscribe(par => {
      const { id } = par;
      this.StudentService.getIdStudent(id)
        .subscribe(res => {
          this.formStudent.patchValue(res)
          console.log(res);
        })
    })
  }
  updateStudent() {
    // this.router.params.subscribe(par => {
    //   const { id } = par;
    //   this.StudentService.editStudent(id, this.formStudent.value)
    //     .subscribe(res => {
    //       this.route.navigate(['/admin/sinh-vien']);
    //     })
    // })
  }

}
