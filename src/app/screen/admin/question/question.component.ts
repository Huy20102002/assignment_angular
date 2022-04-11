import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { SubjectsService } from 'src/app/services/subjects.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questions: Array<any> = [];
  subjectsName: string = "";
  keyword: string = "";
  Code: any;
  constructor(private question: QuestionsService, private routerActived: ActivatedRoute, private router: Router, private subjects: SubjectsService) { }
  ngOnInit(): void {

    this.getAllQuestion();
  }
  getAllQuestion(seachkeywork: string = "") {
    this.routerActived.params.subscribe(res => {
      const { id } = res;
      this.Code = id;
      this.question.getAll(id, seachkeywork)
        .subscribe(data => {
          this.questions = data;
        })
      this.subjects.getCodeSubject(id)
        .subscribe(data => {
          const { Name } = data[0];
          this.subjectsName = Name;
        })
    })
  }
  searchQuestion() {
    this.getAllQuestion(this.keyword);
  }
  removeQuestion(code: any, id: any) {
    Swal.fire({
      title: `Bạn có muốn đáp án này ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Xóa thành công!',
          'Câu hỏi của bạn đã xóa thành công ',
          'success'
        )
        this.question.removeQuestion(code, id)
          .subscribe(res => {
            this.questions = this.questions.filter(item => item.id != id)
          })
      }
    })

  }
}
