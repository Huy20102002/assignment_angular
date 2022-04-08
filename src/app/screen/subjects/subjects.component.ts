import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { StartQuizService } from 'src/app/services/start-quiz.service';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private http: HttpClient, private Router: ActivatedRoute, private users: AuthServiceService,
    private startQuiz: StartQuizService, private StudentService: StudentService) { }
  Subject: Array<any> = [];
  formQuiz: any = {
    Code: "",
    NameSubject: "",
    Mark: 0,
    Start_Time: "",
    End_Time: "",
  }
  StudentQuiz: Array<any> = [];
  Students: Array<any> = [];
  StudentQuizs:any;
  ngOnInit(): void {
    this.http.get<any>("http://localhost:3001/subjects")
      .subscribe(data => {
        this.Subject = data;
      })
  }
  startQuizs(item: any, subject: any) {

    const data = this.users.getUsers();
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
