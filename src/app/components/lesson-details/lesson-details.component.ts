import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtAuthService } from '../../services/jwt-auth.service';

@Component({
  selector: 'app-lesson-details',
  templateUrl: './lesson-details.component.html',
  styleUrls: ['./lesson-details.component.css']
})
export class LessonDetailsComponent implements OnInit {

  public lesson = [];
  constructor(private Jwt: JwtAuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.Jwt.getLessonDetails(id).subscribe(
      data => this.lesson = data,
    );
  }
}
