import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { QuestionsService } from 'src/app/services/questions.service';
import { StartQuizService } from 'src/app/services/start-quiz.service';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private users: AuthServiceService, private quizs: QuestionsService, private startQuiz: StartQuizService,
    private Router: ActivatedRoute, private RouterNavigate: Router, private StudentService: StudentService) { }
  quiz: Array<any> = [];
  subjectName: string = "";
  question_count = 0;
  public currentQuestion: number = 0;
  counter: number = 60;
  id_Startquiz: number = 0;
  startquiz: Array<any> = [];
  user_select_answer: Array<any> = [];
  selected_quiz: number = 0;
  formQuiz: any = {
    User_id: "",
    Code: "",
    IdSubject: "",
    Start_Time: "",
    End_Time: "",
  }
  StarQuiz: any = {
    Id_User: "",
    Id_Question: [],
    Id_Answers: [],
    Id_Code: ""
  }


  ngOnInit(): void {
    this.getQuiz();
  }
  getQuiz() {
    this.Router.params.subscribe(par => {
      const { id } = par;
      this.quizs.getQuestion(id)
        .subscribe(res => {
          let arr = <any>res;
          arr.sort(() => Math.random() - 0.5);
          let selected = arr.slice(0, 10);
          this.quiz = selected;

        })
    })
  }

  selectAnswers(idAnswer: any, idQuestion: any) {

    let indx = -1;
    this.user_select_answer.forEach((el, index) => {
      if (el.idQuestion == idQuestion) {
        indx = index;
        return;
      }
    });
    if (indx == -1) {
      this.user_select_answer.push({
        idQuestion, idAnswer
      });
    } else {
      this.user_select_answer[indx].idAnswer = idAnswer;
    }

  }

  final() {
    const user = this.users.getUsers();
    let correctsAns = 0;
    let idCode = "";
    let indx = -1;
    this.Router.params.subscribe(par => {
      const { id } = par;
      idCode = id;

    })
    this.user_select_answer.forEach((el) => {
      let answer = this.quiz.find(item => item.id == el.idQuestion);
      if (answer.AnswerId == el.idAnswer) {
        correctsAns++;
      }
    })
    const score = (correctsAns * 10 / this.quiz.length).toFixed(2);
    user.StudentQuizs.forEach((m: any, i: number) => {
      if (m.Code == idCode) {
        indx = i;
        return;
      }
    });
    if (indx != -1) {
      user.StudentQuizs[indx].Mark = Number(score);
      user.StudentQuizs[indx].End_Time = Date();
      localStorage.setItem("users", JSON.stringify(user));
    }
    this.StudentService.updateStudent(user)
      .subscribe(res => {
        console.log(res);
      })
    const confirm = window.confirm("Bạn có muốn hoàn thành bài quiz");
    if (confirm) {
      const FinalRouter = `quiz/${idCode}/ket-qua`;
      this.RouterNavigate.navigate([FinalRouter]);
    }
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  prevQuestion() {
    this.currentQuestion--;
  }
}   
