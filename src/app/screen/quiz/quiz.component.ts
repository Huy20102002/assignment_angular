import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { StartQuizService } from 'src/app/services/start-quiz.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private quizs: QuestionsService, private startQuiz: StartQuizService, private Router: ActivatedRoute, private RouterNavigate: Router) { }
  quiz: Array<any> = [];
  subjectName: string = "";
  question_count = 0;
  public ponits = 0;
  public currentQuestion: number = 0;
  counter: number = 60;
  startquiz: Array<any> = [];
  formQuiz: any = {
    Code: "",
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
  startQuizs() {
    const newForm = { ...this.formQuiz }
    this.Router.params.subscribe(par => {
      const { id } = par;
      this.startQuiz.startQuiz(newForm)
        .subscribe(res => {
          console.log(res);
          this.getQuiz();

        })
    })
  }
  final() {
    this.Router.params.subscribe(par => {
      const { id } = par;
      const FinalRouter = `quiz/${id}/ket-qua`;
      this.RouterNavigate.navigate([FinalRouter]);
    })
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  prevQuestion() {
    this.currentQuestion--;
  }
}
