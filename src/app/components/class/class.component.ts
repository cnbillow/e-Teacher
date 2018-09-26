import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  public lessons = [];
  public Id;
  constructor(private Jwt: JwtAuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.Id = id;
    this.Jwt.getEnrolledCourseLessons(id).subscribe(
      data => {
        this.lessons = data
      }
    );
  }

  onSubmit(){
    console.log(this.lessons)
  }

  onSelect(lesson){
    this.router.navigate(['/lessons/'+this.Id+'/lesson/',lesson.id])
  }

}
