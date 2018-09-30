import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user = [];
  public type;

  constructor(private Auth : AuthService, private router: Router,private Token : TokenService,private Jwt: JwtAuthService) {}

  ngOnInit() {
    this.Jwt.getUserData().subscribe(data => {
      this.user = data;
      this.type = data['type'];
   });
  }

  logout(event: MouseEvent){
    event.preventDefault();
    this.Token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
