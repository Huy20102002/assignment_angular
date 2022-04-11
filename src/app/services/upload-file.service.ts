import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http:HttpClient,private storage: Storage) { }

  // uploadFile(file:any):Observable<any>{
   
  // }
}
