import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { StudentService } from 'src/app/services/student.service';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subject: Array<any> = [];
  name: string = "";
  email: string = "";
  user: any;
  StudentQuiz: any;
  constructor(private title:Title,private subjects: SubjectsService, private router: Router, private auth: AuthServiceService,private StudentService:StudentService) { }
  ngOnInit(): void {
    this.title.setTitle("Trang Chủ")

    this.subjects.getSubject()
      .subscribe(res => {
        this.subject = res;
      })
    const data = this.auth.getUsers();
    this.user = data;
    const { name, email } = data;
    this.name = name;
    this.email = email;
  }
  subjectNavigate() {
    this.router.navigate(['/mon-hoc']);
  }
  startQuizs(item: any, subject: any) {

    const data = this.auth.getUsers();
    this.StudentService.getIdStudent(data.id)
      .subscribe(res => {
        this.StudentQuiz = res;
      })
    let indx = -1;
    const Now = Date();
    data.StudentQuizs.forEach((m: any, i: number) => {
      if (m.Code == item) {
        indx = i;
        return;
      }
    });
    if (indx == -1) {
      data.StudentQuizs.push({
        Code: item,
        NameSubject: subject,
        Mark: 0,
        Start_Time: Now,
        End_Time: "",
      });
      localStorage.setItem("users",JSON.stringify(data));
    } else {
      data.StudentQuizs[indx].Start_Time = Now;
    }

    this.StudentService.updateStudent(data)
      .subscribe(res => {
        // console.log(res)
      })
  }
}
