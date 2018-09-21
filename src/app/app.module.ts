import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StudentsComponent } from './components/students/students.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { PostComponent } from './components/post/post.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { ClassComponent } from './components/class/class.component';
import { LessonDetailsComponent } from './components/lesson-details/lesson-details.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { RegisterSubjectComponent } from './components/register-subject/register-subject.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursesClassComponent } from './components/courses-class/courses-class.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentsComponent,
    LessonsComponent,
    ProfileComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    NavbarComponent,
    ClassComponent,
    LessonDetailsComponent,
    SubjectsComponent,
    RegisterSubjectComponent,
    CoursesComponent,
    CoursesClassComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularEditorModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [BeforeLoginService,AfterLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
