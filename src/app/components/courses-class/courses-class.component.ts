import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-class',
  templateUrl: './courses-class.component.html',
  styleUrls: ['./courses-class.component.css']
})
export class CoursesClassComponent implements OnInit {

  public lessons = [];
  public Id;
  constructor(private Jwt: JwtAuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.Id = id;
    this.Jwt.getYourLessons(id).subscribe(
      data => {
        this.lessons = data,
        console.log(this.lessons)
      }
    );
  }

  onSelect(lesson){
    this.router.navigate(['/your-courses/'+this.Id+'/lesson/',lesson.id])
  }

  onDelete(lesson){
    if(confirm("Are you sure to delete this lesson")) {
      this.Jwt.deleteLesson(lesson.id).subscribe(
        data => {
          this.Jwt.getYourLessons(this.Id).subscribe(
            data => {
              this.lessons = data
            }
          );
          this.router.navigate(['/your-courses/'+this.Id]);
        },
        error => console.log(error)
      );
    }
  }

  onEdit(lesson){
    this.router.navigate(['/edit-lesson/'+lesson.id]);
  }

}
