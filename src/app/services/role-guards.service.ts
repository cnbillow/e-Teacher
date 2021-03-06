import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtAuthService } from './jwt-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardsService implements CanActivate{

  public type;
  constructor(private Jwt: JwtAuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log('FROM SERVICE',this.Jwt.getType())
    if(this.Jwt.getType() == 'admin' || this.Jwt.getType() == 'teacher'){
      
      return true;
    }
    return false;
  }
}
