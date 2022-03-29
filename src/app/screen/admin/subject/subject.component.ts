import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private getSubject: SubjectsService) { }
  subject: Array<any> = [];
  keyword: string="";
  ngOnInit(): void {
    this.getSubjects();
  }
  getSubjects(seachkeywork: string = ""){
    this.getSubject.getSubject(seachkeywork)
    .subscribe(res=>{
      this.subject = res;
    })
  }
  remove(item: any) {
    // this.http.delete<any>(`http://localhost:3001/subjects/${item.id}`)
    //   .subscribe(data => {
    //     this.subject = this.subject.filter(subject => subject.id != item.id);
    //   })
  }
  search(){
    this.getSubjects(this.keyword);
  }

}
