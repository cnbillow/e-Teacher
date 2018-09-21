import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public courses = [];

  constructor(private Jwt: JwtAuthService, private router: Router) { }

  ngOnInit() {
    this.Jwt.getCourses().subscribe(
      data => this.courses = data
    );
  }

  onSelect(course){
    // console.log(course)
    this.Jwt.enrollCourse(course.id).subscribe(
      data => {
        this.router.navigate(['/lessons']);
      }
    );
  }

}
