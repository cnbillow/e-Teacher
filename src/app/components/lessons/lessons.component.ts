import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { Router } from '@angular/router';
import { ITeacher } from '../../Interfaces/teacher';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  public enrolledCourses = [];
  constructor(private Jwt: JwtAuthService, private router: Router, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    // this.spinnerService.show();
    this.Jwt.getEnrolledCourses().subscribe(
      data => {
        this.enrolledCourses = data
      }
    );
  }

  onSelect(course){
    this.router.navigate(['/lessons',course.subject_id])
  }

  onDelete(course){
    if(confirm("Are you sure to delete "+course.subject)) {
      this.Jwt.deleteCourse(course.subject_id).subscribe(
        data => {
          this.Jwt.getEnrolledCourses().subscribe(
            data => {
              this.enrolledCourses = data
            }
          );
          this.router.navigate(['/lessons']);
        },
        error => console.log(error)
      );
    }
  }
}
