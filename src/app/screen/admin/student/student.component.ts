import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Array<any> = [];
  keyword: string= "";
  constructor(private studentService: StudentService) { }
  ngOnInit(): void {
    this.getStudent();
  }
  getStudent(seachkeywork: string="") {
    this.studentService.getList(seachkeywork)
      .subscribe(data => {
        this.students = data;
      })
  }
  remove(item: any) {
    this.studentService.removeStudent(item.id)
      .subscribe(data => {
        this.students = this.students.filter(students => students.id != item.id);
      })
  }
  search(){
    this.getStudent(this.keyword);
  }
  
}
