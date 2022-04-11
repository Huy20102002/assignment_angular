
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { StudentService } from 'src/app/services/student.service';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private StudentService: StudentService,
    private SubjectService: SubjectsService,
    private Auth: AuthServiceService,
    private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("Trang Quản Trị Admin")
    this.getCountStudent();
    this.getCountSubject();
    this.getUser();
  }
  countStudent: any;
  countSubject: any;
  user: any;
  getCountStudent() {
    this.StudentService.getList()
      .subscribe(res => {
        this.countStudent = res.length;
      })
  }
  getCountSubject() {
    this.SubjectService.getSubject()
      .subscribe(res => {
        this.countSubject = res.length;
      })
  }
  getUser() {
    this.user = this.Auth.getUsers();
  }

}
