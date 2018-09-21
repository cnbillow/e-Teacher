import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public lesson = {
    subject_id: null,
    title: null,
    body: null
  };
  public subjects = [];
  public error;

  constructor(
    private Jwt: JwtAuthService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) { }

  ngOnInit() {
    this.Jwt.getSubjects().subscribe(
      data => {
        this.subjects = data
      }
    );
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '32rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    uploadUrl: '',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }

  onSubmit(){
    this.Jwt.postLesson(this.lesson).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/your-courses']);
      },
      error => {
        this.error = error;
        console.log(this.error)
      }
    )
  }



  handleError(error){
    this.error = error.error.error;
  }
}
