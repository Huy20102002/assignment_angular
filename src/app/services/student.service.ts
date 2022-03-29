import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // Đưa vào trong class khác.
  constructor(private http: HttpClient) { }
  getList(seachkeywork: string=""): Observable<any>{
    return this.http.get<any>(`${environment.student_api}?email_like=${seachkeywork}`);
  }
  removeStudent(id:any): Observable<any>{
    return this.http.delete<any>(environment.student_api +`/${id}`);
  }
  getIdStudent(id:any): Observable<any>{
    return this.http.get<any>(`${environment.student_api}/${id}`);
  }
  addStudent(post:any): Observable<any>{
    return this.http.post<any>(environment.student_api,post);
  }
  updateStudent(data:any): Observable<any>{
    return this.http.put<any>(`${environment.student_api}/${data.id}`,data);
  }
}
