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
        this.lessons = data
      }
    );
  }

  onSelect(lesson){
    this.router.navigate(['/your-courses/'+this.Id+'/lesson/',lesson.id])
  }

}
