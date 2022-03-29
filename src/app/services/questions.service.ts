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
  // get(id:any):Observable<any>{}
}
