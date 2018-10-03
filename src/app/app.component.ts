import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from './services/token.service';
import { JwtAuthService } from './services/jwt-auth.service';
import { PassingDataService } from './services/passing-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-teacher';
  public loggedIn : boolean;
  public flag : boolean;

  constructor(
    private Auth : AuthService,
    private router: Router,
    private Token : TokenService,
    private Jwt: JwtAuthService,
    private passingData: PassingDataService
  ) {
    passingData.emitChange.subscribe(
      text => {
          this.flag = text
      });
  }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }
  
}
