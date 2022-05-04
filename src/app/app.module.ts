import { NgModule } from '@angular/core';
import { BrowserModule ,Title} from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AdminlayoutComponent } from './screen/admin/layouts/adminlayout/adminlayout.component';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import { InnerHtmlPipe } from './untils/inner-html.pipe';
import { ShufflePipe } from './untils/shuffle.pipe';
import { TrimPipe } from './untils/trim.pipe';
import { CheckScorePipe } from './untils/check-score.pipe';
import { ToastrModule } from 'ngx-toastr';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {provideStorage,getStorage} from '@angular/fire/storage';
import { HistoryComponent } from './screen/history/history.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotfoundComponent } from './screen/notfound/notfound.component';

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
    AdminlayoutComponent,
    InnerHtmlPipe,
    ShufflePipe,
    TrimPipe,
    CheckScorePipe,
    HistoryComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    ToastrModule.forRoot(),
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    provideAuth(()=>getAuth()),
    provideFirestore(()=>getFirestore()),
    provideStorage(()=>getStorage()),
    NgxPaginationModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.GOOGLE_CLIENT_ID
            )
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    },
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
