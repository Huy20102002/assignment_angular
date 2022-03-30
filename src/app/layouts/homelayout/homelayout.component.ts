import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.css'],
})
export class HomelayoutComponent implements OnInit {
  constructor(private Auth: AuthServiceService) { }
  name: string = "";
  
  ngOnInit(): void {

    const data = this.Auth.getUsers();
    const { name } = data[0];
    this.name = name;
  }
  logout() {
    this.Auth.logout();
  }

}
