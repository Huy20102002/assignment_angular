import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private StudentService: StudentService, private User: AuthServiceService, private ActiveRouter: ActivatedRoute) { }
  result: any;
  info: any;
  Code: any;
  ngOnInit(): void {
    this.getResult();
  }
  getResult() {
    const data = this.User.getUsers();
    this.info = data;
    this.ActiveRouter.params.subscribe(par => {
      const { id } = par;
      this.Code = id;
    })
    this.StudentService.getIdStudent(data.id)
      .subscribe(res => {
        const student = res;
        let dataQuiz = student.StudentQuizs.filter((item: any) => item.Code == this.Code)
        this.result = dataQuiz[0];
        })
  }

}
