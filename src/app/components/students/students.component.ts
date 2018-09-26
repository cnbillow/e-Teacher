import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students = [];
  constructor(private Jwt: JwtAuthService, private router: Router) { }

  ngOnInit() {
    this.Jwt.getYourStudents().subscribe(
      data => this.students = data,
    );
  }
  onSubmit(){
    console.log(this.students)
  }

  onDelete(student){
    if(confirm("Are you sure to delete "+student.name)) {
      this.Jwt.deleteStudent(student.id,student.subject_id).subscribe(
        data => {
          this.router.navigate(['/students']);
        },
        error => console.log(error)
      );
    }
  }
}
