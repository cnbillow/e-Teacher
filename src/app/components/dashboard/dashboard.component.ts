import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { JwtAuthService } from '../../services/jwt-auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
