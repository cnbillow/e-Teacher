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
  public error = null;
  constructor(private Jwt: JwtAuthService,private Token: TokenService, private Auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.Jwt.getUserData().subscribe(
      data => this.user = data,
    );
  }

  onSubmit(){
    this.Jwt.update(this.user).subscribe(
      data => {
        this.router.navigate(['/courses']);
      },
      error => console.log(error)
    );
  }


  handleError(error) {
    this.error = error.error.error;
  }

}