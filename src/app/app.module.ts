import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './screen/login/login.component';
import { RegisterComponent } from './screen/register/register.component';
import { SubjectsComponent } from './screen/subjects/subjects.component';
import { QuizComponent } from './screen/quiz/quiz.component';
import { HomeComponent } from './screen/home/home.component';
import { HomelayoutComponent } from './layouts/homelayout/homelayout.component';
import { FinalComponent } from './screen/final/final.component';
import { DashboardComponent } from './screen/admin/dashboard/dashboard.component';
import { StudentComponent } from './screen/admin/student/student.component';
import { AddStudentComponent } from './screen/admin/student/add-student/add-student.component';
import { EditStudentComponent } from './screen/admin/student/edit-student/edit-student.component';
import { SubjectComponent } from './screen/admin/subject/subject.component';
import { AddSubjectComponent } from './screen/admin/subject/add-subject/add-subject.component';
import { EditSubjectComponent } from './screen/admin/subject/edit-subject/edit-subject.component';
import { QuestionComponent } from './screen/admin/question/question.component';
import { AddQuestionComponent } from './screen/admin/question/add-question/add-question.component';
import { EditQuestionComponent } from './screen/admin/question/edit-question/edit-question.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SubjectsComponent,
    QuizComponent,
    HomelayoutComponent,
    HomeComponent,
    FinalComponent,
    DashboardComponent,
    StudentComponent,
    AddStudentComponent,
    EditStudentComponent,
    SubjectComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    QuestionComponent,
    AddQuestionComponent,
    EditQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
