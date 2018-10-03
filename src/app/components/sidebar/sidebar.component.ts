import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {

  @Input() typeFlagSidebar: boolean;
  public user = [];
  public type;

  constructor(private Auth : AuthService, private router: Router,private Token : TokenService,private Jwt: JwtAuthService) {}

  ngOnInit() {
    this.Jwt.getUserData().subscribe(
      data => {
      this.user = data;
      this.type = data['type'];
   });
  }

  ngOnChanges(change: SimpleChanges){
    this.Jwt.getUserData().subscribe(
      data => {
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
