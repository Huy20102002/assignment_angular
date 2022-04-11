import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectsService } from 'src/app/services/subjects.service';
import { Storage, ref, uploadBytesResumable, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})

export class EditSubjectComponent implements OnInit {
  constructor(private Subjects: SubjectsService,
    private ActivatedRouter: ActivatedRoute,
    private Router: Router,
    private storage: Storage,
    private zone: NgZone
  ) { }
  public file: any = {}
  imageDisplay: any;
  imageUrl: any;
  subjectsId: string = "";
  progress: any;
  formSubject: FormGroup = new FormGroup({
    Name: new FormControl('', [
      Validators.required,
    ]),
    Code: new FormControl('', [
      Validators.required
    ])
  })
  ngOnInit(): void {
    this.getSubject();
  }
  getSubject() {
    this.ActivatedRouter.params.subscribe(par => {
      const { id } = par;
      this.subjectsId = id;
      this.Subjects.getIdSubject(id)
        .subscribe(data => {
          this.formSubject.patchValue(data)
          this.imageDisplay = data.Logo
        })
    })
  }



  chooseFile(event: any) {
    this.file = event.target.files[0];
    // Hiển thị ảnh trước khi upload
    var reader = new FileReader();
    // Lấy link ảnh 
    reader.readAsDataURL(event.target.files[0]);
    // Load
    reader.onload =(_event)=>{
      this.imageDisplay = reader.result;
    }
  }

  editSubject() {
    console.log(this.imageDisplay);
    // Upload ảnh:
    const storageRef = ref(this.storage, 'images/' + this.file.name);
    const uploadTask = uploadBytesResumable(storageRef, this.file);
    uploadTask.on('state_changed',
      (snapshot) => {
        this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + this.progress + '% done');
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            this.imageUrl = downloadURL.length < 0 ? downloadURL : this.imageDisplay;
            this.formSubject.value.Logo = this.imageUrl;
            this.Subjects.updateSubject(this.formSubject.value, this.subjectsId)
              .subscribe(par => {
                this.zone.run(() => {
                  this.Router.navigate(['/admin/mon-hoc']);
                })
              })
          })
      }
    )
  }


}
