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

  // public yourTeachers: ITeacher[] = [{ id: null,name:null}];
  constructor(private Jwt: JwtAuthService, private router: Router, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    // this.spinnerService.show();
    // this.Jwt.getYourTeachers().subscribe(
    //   data => {
    //     this.yourTeachers = data
    //     // this.spinnerService.hide();
    //   }
    // );
  }

  onSelect(teacher){
    this.router.navigate(['/lessons',teacher.id])
  }

}
