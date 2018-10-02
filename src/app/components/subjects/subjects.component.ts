import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, Route } from '@angular/router';
import { JwtAuthService } from '../../services/jwt-auth.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  public course = {
    subject: null,
    description: null
  };
  public subjects = [];
  @ViewChild('CloseModalRef') modalElementRef: ElementRef;

  constructor(private Jwt: JwtAuthService, private router: Router) { }

  ngOnInit() {
    this.Jwt.getSubjects().subscribe(
      data => {
        this.subjects = data
      }
    );
  }

  onSubmit(){
    this.Jwt.addTeacher(this.course).subscribe();
    this.Jwt.getSubjects().subscribe(
      data => this.subjects = data
    );
  }

  onSelect(subject){
    this.router.navigate(['/your-courses',subject.id])
  }

  onDelete(subject){
    if(confirm("Are you sure to delete "+subject.subject)) {
      this.Jwt.deleteSubject(subject.id).subscribe(
        data => {
          this.Jwt.getSubjects().subscribe(
            data => this.subjects = data
          );
        },
        error => console.log(error)
      );
    }
  }

  hideModal(){
    this.modalElementRef.nativeElement.click();
    // console.log(this.modalElementRef)
  }
}
