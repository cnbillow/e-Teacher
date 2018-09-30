import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtAuthService } from './jwt-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();
  changeAuthStatus(value: boolean){
    this.loggedIn.next(value);
  }

  constructor(private Token: TokenService,private Jwt: JwtAuthService) { }
}
