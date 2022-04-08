import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectsService } from 'src/app/services/subjects.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})

export class EditSubjectComponent implements OnInit {

  constructor(private Subjects: SubjectsService,
    private ActivatedRouter: ActivatedRoute,
    private Router: Router) { }
  public imageDisplay = '';
  subjectsId: string = "";
  pathFile: string = "";
  formSubject: FormGroup = new FormGroup({
    Name: new FormControl('', [
      Validators.required,
    ]),
    Code: new FormControl('', [
      Validators.required
    ]),
    Logo: new FormControl('', [
      Validators.required
    ])
  })
  ngOnInit(): void {
    this.getSubject();
  }
  getSubject(){
    this.ActivatedRouter.params.subscribe(par => {
      const { id } = par;
      this.subjectsId = id;
      this.Subjects.getIdSubject(id)
        .subscribe(data => {
          this.formSubject.patchValue(data)
        })
    })
  }
  // upload($event: any) {
  //   this.pathFile = $event.target.files[0];
  // }

  editSubject() {
    // Upload ảnh:
    
    this.Subjects.updateSubject(this.formSubject.value, this.subjectsId)
      .subscribe(par => {
        this.Router.navigate(['/admin/mon-hoc']);
      })
  }




}
