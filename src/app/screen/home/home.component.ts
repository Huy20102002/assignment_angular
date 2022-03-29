import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subject:Array<any> = []; 
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.http.get<any>("http://localhost:3001/subjects")
    .subscribe(res => {
      console.log(res);
        this.subject = res;
    })
  }
  subjectNavigate(){
    this.router.navigate(['/mon-hoc'])
  }
}
