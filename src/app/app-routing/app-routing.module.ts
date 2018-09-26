import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { StudentsComponent } from '../components/students/students.component';
import { LessonsComponent } from '../components/lessons/lessons.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { PostComponent } from '../components/post/post.component';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { BeforeLoginService } from '../services/before-login.service';
import { AfterLoginService } from '../services/after-login.service';
import { RoleGuardsService } from '../services/role-guards.service';
import { ClassComponent } from '../components/class/class.component';
import { LessonDetailsComponent } from '../components/lesson-details/lesson-details.component';
import { SubjectsComponent } from '../components/subjects/subjects.component';
import { RegisterSubjectComponent } from '../components/register-subject/register-subject.component';
import { CoursesComponent } from '../components/courses/courses.component';
import { CoursesClassComponent } from '../components/courses-class/courses-class.component';
import { CourseDetailsComponent } from '../components/course-details/course-details.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "students",
    component: StudentsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "lessons",
    component: LessonsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "lessons/:id",
    component: ClassComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "lessons/:id/lesson/:id",
    component: LessonDetailsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "your-courses",
    component: SubjectsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "your-courses/:id",
    component: CoursesClassComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "your-courses/:id/lesson/:id",
    component: CourseDetailsComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "courses",
    component: CoursesComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "settings",
    component: ProfileComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: "post",
    component: PostComponent,
    canActivate: [AfterLoginService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
