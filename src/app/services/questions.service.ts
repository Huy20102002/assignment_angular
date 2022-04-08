import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }
  getAll(id: any,searchkeyword:any): Observable<any> {
    return this.http.get<any>(`${environment.questions_api}/${id}?q=${searchkeyword}`);
  }
  getQuestion(id:any): Observable<any>{
    return this.http.get<any>(`${environment.questions_api}/${id}`);
  }
  addQuestion(code:any,post:any): Observable<any>{
    return this.http.post<any>(`${environment.questions_api}/${code}`,post);
  }
  getQuestionid(Code:any,id:any):Observable<any>{
    return this.http.get<any>(`${environment.questions_api}/${Code}/${id}`)
  }
  updateQuestion(Code:any,id:any,data:any):Observable<any>{
    return this.http.put<any>(`${environment.questions_api}/${Code}/${id}`,data);
  }
  removeQuestion(Code:any,id:any):Observable<any>{
    return this.http.delete<any>(`${environment.questions_api}/${Code}/${id}`);
  }

  // get(id:any):Observable<any>{}
}
