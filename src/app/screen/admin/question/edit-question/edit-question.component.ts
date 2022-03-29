import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  input: string = `<div class="input-group mb-3">
  <div class="input-group-prepend">
      <div class="input-group-text">
          <input type="radio" aria-label="Checkbox for following text input"  name="radio">
      </div>
  </div>
  <input type="text" class="form-control" aria-label="Text input with checkbox">
</div>
  `;
  formhtml: Array<any> = [];
  formQuestions: FormGroup = new FormGroup({
    Text: new FormControl('', [
      Validators.required
    ]),
    Marks: new FormControl('', [
      Validators.required
    ]),
    AnswerId: new FormControl('',[
      Validators.required
    ])  
  })
  
  addQuestions() {
  }
  updateFormQuestion(){
    this.formhtml.push(this.input);
    console.log(this.formhtml);
  }

}
