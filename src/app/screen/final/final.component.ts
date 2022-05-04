import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private StudentService: StudentService, private User: AuthServiceService, private ActiveRouter: ActivatedRoute,private title:Title) { }
  result: any;
  info: any;
  Codes: any;
  ngOnInit(): void {
    this.title.setTitle("Trang Kết Quả")
    this.getResult();
  }
  getResult() {
    const data = this.User.getUsers();
    this.info = data;
    this.ActiveRouter.params.subscribe(par => {
      const { id } = par;
      this.Codes = id;
    })
    this.StudentService.getIdStudent(data.id)
      .subscribe(res => {
        const student = res;
        let dataQuiz = student.StudentQuizs.filter((item: any) => item.Code == this.Codes)
        this.result = dataQuiz[0];
        })
  }

}
