import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private UserService: AuthServiceService,private title: Title) { }
  history: any;
  name: any;
  ngOnInit(): void {
    this.title.setTitle("Trang lịch sử làm bài")
    this.getUser();
  }
  getUser() {
    const data = this.UserService.getUsers();
    this.name = data.name;
    this.history = data.StudentQuizs;
  }

}
