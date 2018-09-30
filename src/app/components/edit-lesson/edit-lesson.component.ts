import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ILesson } from '../../Interfaces/lesson';

@Component({
  selector: 'app-edit-lesson',
  templateUrl: './edit-lesson.component.html',
  styleUrls: ['./edit-lesson.component.css']
})
export class EditLessonComponent implements OnInit {

  public lesson = {
    id: null,
    subject_id: null,
    name: null,
    title: null,
    body: null
  };
  private Id;

  constructor(private Jwt: JwtAuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.Id = id;
    this.Jwt.getLesson(id).subscribe(
      data => {
        this.lesson = data
      }
    );
  }

  onSubmit(){
    this.Jwt.editLesson(this.lesson).subscribe(
      data => {
        this.router.navigate(['your-courses/'+this.lesson.subject_id+"/lesson/"+this.lesson.id])
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


}
