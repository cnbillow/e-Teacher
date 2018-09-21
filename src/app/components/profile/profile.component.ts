import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user = [];
  public teachers = [];
  public yourTeachers = [];
  public error = null;
  constructor(private Jwt: JwtAuthService,private Token: TokenService, private Auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.Jwt.getUserData().subscribe(
      data => this.user = data,
    );
    this.Jwt.getTeachers().subscribe(
      data => this.teachers = data,
    );
    this.Jwt.getYourTeachers().subscribe(
      data => this.yourTeachers = data,
    );
  }

  onSubmit(){
    this.Jwt.update(this.user).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/dashboard']);
      },
      error => console.log(error)
    );
  }


  handleError(error) {
    this.error = error.error.error;
  }

}
