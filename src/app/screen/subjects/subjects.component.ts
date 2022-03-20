import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  Subject: Array<any> = [];
  ngOnInit(): void {
    this.http.get<any>("http://localhost:3001/subjects")
    .subscribe(data=>{
      this.Subject = data;
    })
  }

}
