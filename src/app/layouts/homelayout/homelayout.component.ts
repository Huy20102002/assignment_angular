import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css'],
})
export class HomelayoutComponent implements OnInit {
  constructor() { }
  name: string = "";
  ngOnInit(): void {
    const {name}  =JSON.parse(<any>localStorage.getItem("users"));
   this.name = name;
  }
  logout(){
    window.localStorage.removeItem("users");
  }

}
