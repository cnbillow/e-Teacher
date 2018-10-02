import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    teacher: null,
    password: null,
    password_confirmation: null
  };
  public teachers = [];
  public error = null;
  @Output() public childValue = new EventEmitter();

  constructor(
    private Jwt: JwtAuthService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) { }

  ngOnInit() {
  }

  btnTeachers(){
    console.log(this.form.teacher)
  }
  onSubmit(){
    this.Jwt.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/courses');
  }

  handleError(error){
    this.error = error.error.error;
  }

  loginForm(){
    this.childValue.emit(true);
    this.router.navigate(['/login']);
  }

}
