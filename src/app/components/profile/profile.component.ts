import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { JwtAuthService } from '../../services/jwt-auth.service';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PassingDataService } from '../../services/passing-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user = [];
  public error = null;
  private valuePass: boolean;

  constructor(
    private Jwt: JwtAuthService,
    private Token: TokenService, 
    private Auth: AuthService, 
    private router: Router,
    private passingData: PassingDataService
    ) { }

  ngOnInit() {
    this.Jwt.getUserData().subscribe(
      data => {
        this.user = data,
        this.user['type'] = false
      }
    );
  }

  onSubmit(){
    this.Jwt.update(this.user).subscribe(
      data => {
        this.router.navigate(['/courses']);
      },
      error => console.log(error)
    );
    this.passingData.emit(this.user['type']);
  }


  handleError(error) {
    this.error = error.error.error;
  }

}
