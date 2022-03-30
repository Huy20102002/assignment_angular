import { Injectable } from '@angular/core';
import { Storage,ref,uploadBytes } from '@angular/fire/storage';
import { getDownloadURL } from 'firebase/storage';
import { from, Observable, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(private storage: Storage) { }
  uploadImage(image:File,path:string):Observable<string>{
    const Storageref = ref(this.storage,path);
    const uploadTask = from(uploadBytes(Storageref,image));
    return uploadTask.pipe(
      switchMap((result)=>getDownloadURL(result.ref))
    );
  }
}
