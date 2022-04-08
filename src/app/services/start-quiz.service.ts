import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StartQuizService {

  constructor(private http: HttpClient) { }
  StudentQuiz(post: Array<any>): Observable<any> {
    return this.http.post<any>(`${environment.Mark_Quiz}`, post);
  }
  StartQuiz(post: Array<any>): Observable<any> {
    return this.http.post<any>(`${environment.Start_Quiz}`, post)
  }
  Update_StartQuiz(id: any,post: Array<any>): Observable<any> {
    return this.http.put<any>(`${environment.Start_Quiz}/${id}`, post);
  }
  get_startQuiz(id: any): Observable<any> { 
    return this.http.get<any>(`${environment.Start_Quiz}/${id}`);
  }
}
