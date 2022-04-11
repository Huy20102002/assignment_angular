import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private UserService: AuthServiceService) { }
  history:any;
  name:any;
  ngOnInit(): void {
  this.getUser();
  }
  getUser(){
   const data= this.UserService.getUsers(); 
   this.name = data.name;
   this.history = data.StudentQuizs;
  }

}
