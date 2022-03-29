import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StartQuizService {

  constructor(private http: HttpClient) { }
  startQuiz(post: Array<any>):Observable<any>{
    return this.http.post<any>(`${environment.startquiz_api}`,post);
  }
}
