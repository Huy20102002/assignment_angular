import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor(private questionservice: QuestionsService, private RouterActived: ActivatedRoute,private Router: Router) { }
  input: string = `<div class="input-group mb-3">
  <div class="input-group-prepend">
      <div class="input-group-text">
          <input type="radio" aria-label="Checkbox for following text input" value="{{i+1}}"  name="radio">
      </div>
  </div>
  <input type="text" class="form-control" formControlName="Answer" aria-label="Text input with checkbox">
</div>
  `;
  select_answer: Array<any> = [];
  formhtml: Array<any> = [];
  selectIdAnswer: any;
  Text: Array<any> = [];
  id: any;
  idAnswer: any;
  formQuestions: FormGroup = new FormGroup({
    Text: new FormControl('', [
      Validators.required
    ]),
    Marks: new FormControl(1, [

    ]),
    AnswerId: new FormControl(),
    Answers: new FormControl([])
  })
  ngOnInit(): void {
  }
  addFormQuestion() {
    this.formhtml.push(this.input);
  }
  selectAnswer(idAnswer: number) {
    this.idAnswer = idAnswer;
    this.formQuestions.value.AnswerId = this.idAnswer;
  }
  addQuestions() {
      for (let i = 0; i < this.formhtml.length; i++) {
        this.formQuestions.value.Answers.push({
          Text: this.Text[i],
          id: i+1
        })
      }
    this.RouterActived.params.subscribe(value => {
      const {id} = value;
      this.questionservice.addQuestion(id,this.formQuestions.value)
      .subscribe(res => {
        this.Router.navigate(['/admin/cau-hoi/'+ id])
      })
    })

  }
}
