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
  public toggle = false;
  public clicked = false;

  constructor(private Jwt: JwtAuthService, private router: Router) { }

  ngOnInit() {
    this.Jwt.getCourses().subscribe(
      data => {
        this.courses = data
      }
    );
  }

  onSelect(course){
    this.clicked = true;
    this.Jwt.enrollCourse(course.id).subscribe(
      data => {
        this.Jwt.getCourses().subscribe(
          data => {
            this.courses = data
          }
        );
        this.router.navigate(['/courses']);
        this.clicked = false;
      }
    );
  }

  mouseEnter(index){
    console.log(index)
    this.toggle = true;
 }
 mouseLeave(){
   this.toggle = false;
 }

}
