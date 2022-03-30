import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomelayoutComponent } from './layouts/homelayout/homelayout.component';
import { DashboardComponent } from './screen/admin/dashboard/dashboard.component';
import { AdminlayoutComponent } from './screen/admin/layouts/adminlayout/adminlayout.component';
import { AddQuestionComponent } from './screen/admin/question/add-question/add-question.component';
import { EditQuestionComponent } from './screen/admin/question/edit-question/edit-question.component';
import { QuestionComponent } from './screen/admin/question/question.component';
import { AddStudentComponent } from './screen/admin/student/add-student/add-student.component';
import { EditStudentComponent } from './screen/admin/student/edit-student/edit-student.component';
import { StudentComponent } from './screen/admin/student/student.component';
import { AddSubjectComponent } from './screen/admin/subject/add-subject/add-subject.component';
import { EditSubjectComponent } from './screen/admin/subject/edit-subject/edit-subject.component';
import { SubjectComponent } from './screen/admin/subject/subject.component';
import { FinalComponent } from './screen/final/final.component';
import { HomeComponent } from './screen/home/home.component';
import { LoginComponent } from './screen/login/login.component';
import { QuizComponent } from './screen/quiz/quiz.component';
import { RegisterComponent } from './screen/register/register.component';
import { SubjectsComponent } from './screen/subjects/subjects.component';

const routes: Routes = [
  {
    path: "", component: HomelayoutComponent,
    children: [
      { path: "", component: HomeComponent},
      { path: "mon-hoc", component: SubjectsComponent},
      { path: "quiz/:id", component: QuizComponent },
      { path: "quiz/:id/ket-qua", component: FinalComponent},
    ]
  },
  {
    path: "login", component: LoginComponent
  },
  { path: "register", component: RegisterComponent },
  {
    path: "admin", component: AdminlayoutComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "sinh-vien", component: StudentComponent },
      { path: "sinh-vien/add", component: AddStudentComponent },
      { path: "sinh-vien/edit/:id", component: EditStudentComponent },
      { path: "mon-hoc", component: SubjectComponent },
      { path: "mon-hoc/add", component: AddSubjectComponent },
      { path: "mon-hoc/edit/:id", component: EditSubjectComponent },
      { path: "cau-hoi/add", component: AddQuestionComponent },
      { path: "cau-hoi/:id", component: QuestionComponent },
      { path: "cau-hoi/edit/:id", component: EditQuestionComponent }
    ]
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
