import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {

  constructor(private auth: AuthServiceService) { }
  user: any;
  ngOnInit(): void {
    this.getUser();
  }
  logout() {
    this.auth.logout();
  }
  getUser() {
    this.user = this.auth.getUsers();
  }
}
