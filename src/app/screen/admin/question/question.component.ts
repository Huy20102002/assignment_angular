import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: Array<any> = [];
  subjectsName: string = "";
  keyword: string="";
  constructor(private question: QuestionsService, private router: ActivatedRoute, private subjects: SubjectsService) { }
  ngOnInit(): void {
    this.getAllQuestion();
  }
  getAllQuestion(seachkeywork: string="") {
    this.router.params.subscribe(res => {
      const { id } = res;
      this.question.getAll(id,seachkeywork)
        .subscribe(data => {
          this.questions = data;
        })
      this.subjects.getCodeSubject(id)
        .subscribe(data => {
          const  {Name} = data[0];
          this.subjectsName = Name;
        })
    })
  }
  searchQuestion(){
    this.getAllQuestion(this.keyword);
  }

}
