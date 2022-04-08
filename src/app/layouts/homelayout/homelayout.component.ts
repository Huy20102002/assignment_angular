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
  user: any;
  ngOnInit(): void {

    const data = this.Auth.getUsers();
    this.user = data;
    const { name } = data;
    this.name = name;
  }
  logout() {
    this.Auth.logout();
  }

}
