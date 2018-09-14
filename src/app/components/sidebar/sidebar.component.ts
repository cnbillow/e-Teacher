import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public user = [];
  public type;

  constructor(private Jwt: JwtAuthService, private Auth: AuthService) {}

  ngOnInit() {
    this.Jwt.getUserData().subscribe(data => {
      this.user = data;
      this.type = data['type'];
   });
  }

  onSubmit(){
    console.log(this.Jwt.getType())
  }
}
