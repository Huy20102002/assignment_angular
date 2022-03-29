import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  constructor(private http: HttpClient) { }
  getLimitSubject(quantity:string=""):Observable<any>{
    return this.http.get<any>(`${environment.subjects_api}?_limit=${quantity}`);
   }
  getSubject(seachkeywork:string=""): Observable<any> {
    return this.http.get<any>(`${environment.subjects_api}?q=${seachkeywork}`);
  }

  getIdSubject(id:any): Observable<any>{
    return this.http.get<any>(`${environment.subjects_api}/${id}`);
  }
  getCodeSubject(Code:any):Observable<any>{
    return this.http.get<any>(`${environment.subjects_api}?Code=${Code}`)
  }
  removeSubject(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.subjects_api}/${id}`)
  }
  addSubject(post: any): Observable<any> {
    return this.http.post<any>(environment.subjects_api, post);
  }
  updateSubject(data:any,id:any): Observable<any>{
    return this.http.put<any>(`${environment.subjects_api}/${id}`,data);
  }
}
