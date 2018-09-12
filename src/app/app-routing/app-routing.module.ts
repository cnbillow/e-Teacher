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

const routes: Routes = [
  {
    path: "",
    redirectTo: "/login",
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
    path: "profile",
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
