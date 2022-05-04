import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectsService } from 'src/app/services/subjects.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  constructor(private getSubject: SubjectsService, private route: ActivatedRoute, private router: Router,private title: Title) {
  }
  p: number = 1;
  config: any;
  subject: Array<any> = [];
  keyword: string = "";
  ngOnInit(): void {
    this.title.setTitle("Trang Danh Sách Môn Học")
    this.getSubjects();
  }
  getSubjects(seachkeywork: string = "") {
    this.getSubject.getSubject(seachkeywork)
      .subscribe(res => {
       this.subject = res;
      })

  }
  search() {
    this.getSubjects(this.keyword);
  }
  pageChange(newPage: number) {
    this.router.navigate(['/admin/mon-hoc'], { queryParams: { page: newPage } })
  }

}
