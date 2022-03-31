import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient, private Router: Router) { }

  login(email: string, googleid: string): Observable<any> {
    return this.http.get<any>(`${environment.student_api}?email=${email}&googleId=${googleid}`)
      .pipe(
        map((item) => {
          if (item.length > 0) {
            localStorage.setItem("users", JSON.stringify(item));
            this.Router.navigate(['/']);
            return item[0];
          }
          return null;
        })
      )
  }
  logout() {
    localStorage.removeItem("users");
    this.Router.navigate(['/login']);
  }
  getUsers() {
    return JSON.parse(localStorage.getItem("users") || "{}");
  }

}
