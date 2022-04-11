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
  datagoogle: any;
  loginGoogle(email: string, googleid: string, name: string, photoUrl: string): Observable<any> {
    return this.http.get<any>(`${environment.user_api}?email=${email}&googleId=${googleid}`)
      .pipe(
        map((item) => {
          if (item.length > 0) {
            localStorage.setItem("users", JSON.stringify(item[0]));
            if (item[0].roles == "admin") {
              this.Router.navigate(['/admin']);
            } else {
              this.Router.navigate(['/']);
            }
            return item[0];
          } else {

            return this.http.post<any>(`${environment.user_api}`, {
              "name": name,
              "email": email,
              "googleId": googleid,
              "avatar": photoUrl,
              "roles": "member",
              "StudentQuizs": [],
              "password": "0000000",
            }).subscribe(data => {
              const { user } = data;
              localStorage.setItem("users", JSON.stringify({
                "id": user.id,
                "name": name,
                "email": email,
                "googleId": googleid,
                "avatar": photoUrl,
                "roles": "member",
                "StudentQuizs": [],
                "password": "0000000"
              }));
              this.Router.navigate(['/']);
            })

          }
        })
      )
  }

  login(data: any): Observable<any> {
    return this.http.post<any>(`${environment.signin_api}`, data);
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(`${environment.signup_api}`, data);
  }
  logout() {
    localStorage.removeItem("users");
    this.Router.navigate(['/login']);
  }
  getUsers() {
    return JSON.parse(localStorage.getItem("users") || "{}");
  }
  insertGoogle(post: any): Observable<any> {
    return this.http.post<any>(`${environment.user_api}`, post)
  }

}
