import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subject: Array<any> = [];
  name: string = "";
  email: string = "";
  constructor(private subjects: SubjectsService, private router: Router, private auth: AuthServiceService) { }
  ngOnInit(): void {
    this.subjects.getSubject()
      .subscribe(res => {
        this.subject = res;
      })
    const data = this.auth.getUsers();
    const { name, email } = data[0];
    this.name = name;
    this.email = email;
  }
  subjectNavigate() {
    this.router.navigate(['/mon-hoc']);
  }

}
