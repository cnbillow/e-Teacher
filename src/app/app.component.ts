import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from './services/token.service';
import { JwtAuthService } from './services/jwt-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-teacher';
  public user = [];
  public type:boolean;
  public loggedIn : boolean;
  constructor(private Auth : AuthService, private router: Router,private Token : TokenService,private Jwt: JwtAuthService) {
    
  }

  ngOnInit() {
      this.Auth.authStatus.subscribe(value => this.loggedIn = value);
      this.Jwt.getUserData().subscribe(
        data => this.user = data,
      );
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}
