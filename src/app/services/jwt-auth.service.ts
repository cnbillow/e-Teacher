import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TokenService } from './token.service';
import { IUser } from '../Interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private token: TokenService) { }

  signup(data){
    return this.http.post(`${this.baseUrl}/signup`,data);
  }

  login(data){
    return this.http.post(`${this.baseUrl}/login`,data);
  }

  update(data){
    const httpHeaders = new HttpHeaders()
    .set('Authorization','Bearer '+this.token.get());

    return this.http.post(`${this.baseUrl}/update`,data,{headers: httpHeaders});
  }

  getUserData(): Observable<IUser[]> {
    
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get<IUser[]>(`${this.baseUrl}/getUserDetails`,{headers: httpHeaders});
  }
}
