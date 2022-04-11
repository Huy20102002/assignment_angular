import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Array<any> = [];
  keyword: string= "";
  constructor(private studentService: StudentService,private title: Title) { }
  ngOnInit(): void {
    this.title.setTitle("Trang Danh Sách Sinh Viên");
    this.getStudent();
  }
  getStudent(seachkeywork: string="") {
    this.studentService.getList(seachkeywork)
      .subscribe(data => {
        this.students = data;
      })
  }
  remove(item: any) {
    Swal.fire({
      title: `Bạn có muốn xóa tài khoản ${item.name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xóa',
      cancelButtonText: 'Hủy' 
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Xóa thành công!',
          'Your file has been deleted.',
          'success'
        )
        this.studentService.removeStudent(item.id)
        .subscribe(data => {
          this.students = this.students.filter(students => students.id != item.id);
        })
      }
    })
 
  }
  search(){
    this.getStudent(this.keyword);
  }
  
}
