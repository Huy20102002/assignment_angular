import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  constructor(private QuestionService: QuestionsService, private RouterActivied: ActivatedRoute, private router: Router) { }

  input: string = ``;
  select_answer: Array<any> = [];
  formhtml: Array<any> = [];
  selectIdAnswer: any;
  Text: Array<any> = [];
  id: any;
  getAnswer: any;
  idAnswer: any;
  correct: any;
  formQuestions: FormGroup = new FormGroup({
    Text: new FormControl('', [
      Validators.required
    ]),
    Marks: new FormControl(1, [

    ]),
    AnswerId: new FormControl(),
    Answers: new FormControl([])
  })
  ngOnInit(): void { this.getQuestion() }
  updateFormQuestion() {
    this.formhtml.push(this.input);
  }
  selectAnswer(idAnswer: number) {
    this.idAnswer = idAnswer;
    this.formQuestions.value.AnswerId = this.idAnswer;
  }
  getQuestion() {
    this.RouterActivied.params.subscribe(res => {
      const { id, code } = res;
      this.QuestionService.getQuestionid(code, id)
        .subscribe(value => {
          this.formQuestions.patchValue(value);
          this.getAnswer = value.Answers;
          this.correct = value.AnswerId;
        })
    })
  }

  editQuestion() {
    let indx = -1;
    this.formQuestions.value.Answers.forEach((el: any, index: any) => {
      if (el.Text == this.Text[index]) {
        indx = index;
      }
    })
    if (indx == -1) {
      let countQuestion = this.formQuestions.value.Answers.length;
      for (let i = 0; i < this.formhtml.length; i++) {
        this.formQuestions.value.Answers.push({
          id: i + countQuestion + 1,
          Text: this.Text[i]
        })
      }
    } else {
      for (let i = 0; i < this.formhtml.length; i++) {
        this.formQuestions.value.Answers[indx].Text = this.Text[i];
      }
    }
    this.RouterActivied.params.subscribe(value => {
      const { code, id } = value;
      this.QuestionService.updateQuestion(code, id, this.formQuestions.value)
        .subscribe(res => {
          this.router.navigate(['/admin/cau-hoi/' + code]);
        })
    })
  }
  removeinputQuestion(ids: any) {
    const confirm = window.confirm("Bạn có muốn xóa đáp án này ?");
    if (confirm) {
      this.formQuestions.value.Answers = this.formQuestions.value.Answers.filter((item: any) => item.id != ids);
      this.getAnswer = this.getAnswer.filter((item: any) => item.id != ids);
      this.RouterActivied.params.subscribe(value => {
        const { code, id } = value;
        this.QuestionService.updateQuestion(code, id, this.formQuestions.value)
          .subscribe(res => {
            this.getAnswer = this.getAnswer.filter((item: any) => item.id != ids);
          })
      })
    }
  }
  removeinputnew(id: any) {
    console.log(this.formhtml[id]);
    this.formhtml = this.formhtml.filter(item => item[id] == id);
  }
}
