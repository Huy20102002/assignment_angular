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
import { HistoryComponent } from './screen/history/history.component';
import { HomeComponent } from './screen/home/home.component';
import { LoginComponent } from './screen/login/login.component';
import { NotfoundComponent } from './screen/notfound/notfound.component';
import { QuizComponent } from './screen/quiz/quiz.component';
import { RegisterComponent } from './screen/register/register.component';
import { SubjectsComponent } from './screen/subjects/subjects.component';
import { AdminGuard } from './services/AdminGuard';
import { AuthGuard } from './services/auth-guard';

const routes: Routes = [
  {
    path: "", component: HomelayoutComponent,canActivate:[AuthGuard],
    children: [
      { path: "", component: HomeComponent,canActivate:[AuthGuard]},
      { path: "mon-hoc", component: SubjectsComponent,canActivate:[AuthGuard]},
      { path: "quiz/:id", component: QuizComponent,canActivate:[AuthGuard]},
      { path: "quiz/:id/ket-qua", component: FinalComponent,canActivate:[AuthGuard]},
      {path: "history",component:HistoryComponent,canActivate:[AuthGuard]}
    ]
  },
  {
    path: "login", component: LoginComponent
  },
  { path: "register", component: RegisterComponent },
  { 
    path: "admin", component: AdminlayoutComponent,canActivate:[AdminGuard],
    children: [
      { path: "", component: DashboardComponent,canActivate:[AdminGuard] },
      { path: "sinh-vien", component: StudentComponent,canActivate:[AdminGuard] },
      { path: "sinh-vien/add", component: AddStudentComponent,canActivate:[AdminGuard] },
      { path: "sinh-vien/edit/:id", component: EditStudentComponent,canActivate:[AdminGuard] },
      { path: "mon-hoc", component: SubjectComponent,canActivate:[AdminGuard] },
      { path: "mon-hoc/add", component: AddSubjectComponent,canActivate:[AdminGuard] },
      { path: "mon-hoc/edit/:id", component: EditSubjectComponent,canActivate:[AdminGuard] },
      { path: "cau-hoi/add/:id", component: AddQuestionComponent,canActivate:[AdminGuard] },
      { path: "cau-hoi/:id", component: QuestionComponent,canActivate:[AdminGuard] },
      { path: "cau-hoi/edit/:code/:id", component: EditQuestionComponent,canActivate:[AdminGuard] }
    ]
  },  
  {
    path: '**',component: NotfoundComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
