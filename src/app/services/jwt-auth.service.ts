import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TokenService } from './token.service';
import { IUser } from '../Interfaces/user';
import { Observable } from 'rxjs';
import { ITeacher } from '../Interfaces/teacher';
import { ILesson } from '../Interfaces/lesson';
import { IStudent } from '../Interfaces/student';
import { ISubject } from '../Interfaces/subject';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {

  private baseUrl = 'http://localhost:8000/api';

  public type;

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

    return this.http.post(`${this.baseUrl}/update`,data,{headers: httpHeaders,responseType: 'text'});
  }

  getUserData(): Observable<IUser[]> {
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get<IUser[]>(`${this.baseUrl}/getUserDetails`,{headers: httpHeaders});
  }

  addTeacher(data){
    const httpHeaders = new HttpHeaders()
    .set('Authorization','Bearer '+this.token.get());

    return this.http.post(`${this.baseUrl}/addTeacher`,data,{headers: httpHeaders,responseType: 'text'});
  }

  getSubjects(): Observable<ISubject[]> {
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get<ISubject[]>(`${this.baseUrl}/getSubjects`,{headers: httpHeaders});
  }


  postLesson(data){
    const httpHeaders = new HttpHeaders()
    .set('Authorization','Bearer '+this.token.get());

    return this.http.post(`${this.baseUrl}/postLesson`,data,{headers: httpHeaders,responseType: 'text'});
  }

  getYourLessons(id): Observable<ILesson[]>{
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get<ILesson[]>(`${this.baseUrl}/getYourLessons/`+id,{headers: httpHeaders});
  }

  getYourLessonDetails(id): Observable<ILesson[]>{
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get<ILesson[]>(`${this.baseUrl}/getYourLessonDetails/`+id,{headers: httpHeaders});
  }

  getLesson(id): Observable<ILesson>{
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get<ILesson>(`${this.baseUrl}/getLesson/`+id,{headers: httpHeaders})
  }

  editLesson(data){
    const httpHeaders = new HttpHeaders()
    .set('Authorization','Bearer '+this.token.get());
    return this.http.post(`${this.baseUrl}/editLesson`,data,{headers: httpHeaders,responseType: 'text'});
  }

  deleteLesson(lesson_id){
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get(`${this.baseUrl}/deleteLesson/`+lesson_id,{headers: httpHeaders,responseType: 'text'});
  }
  
  getCourses(): Observable<ITeacher[]> {
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get<ITeacher[]>(`${this.baseUrl}/getCourses`,{headers: httpHeaders});
  }

  enrollCourse(id): Observable<ITeacher[]>{
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get<ITeacher[]>(`${this.baseUrl}/enrollCourse/`+id,{headers: httpHeaders});
  }

  getEnrolledCourses(): Observable<ITeacher[]>{
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get<ITeacher[]>(`${this.baseUrl}/getEnrolledCourses`,{headers: httpHeaders});
  }

  getEnrolledCourseLessons(id): Observable<ILesson[]>{
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get<ILesson[]>(`${this.baseUrl}/getEnrolledCourseLessons/`+id,{headers: httpHeaders});
  }

  getEnrolledCourseLessonDetails(id): Observable<ILesson[]>{
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get<ILesson[]>(`${this.baseUrl}/getEnrolledCourseLessonDetails/`+id,{headers: httpHeaders});
  }

  deleteCourse(subject_id){
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get(`${this.baseUrl}/deleteCourse/`+subject_id,{headers: httpHeaders,responseType: 'text'});
  }

  deleteSubject(id){
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get(`${this.baseUrl}/deleteSubject/`+id,{headers: httpHeaders,responseType: 'text'});
  }

  getType(){
    this.getUserData().subscribe(
      data => this.type = data['type']
    );
    return this.type;
  }
  
  getYourStudents(): Observable<IStudent[]>{
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get<IStudent[]>(`${this.baseUrl}/getYourStudents`,{headers: httpHeaders});
  }

  deleteStudent(id,subject_id){
    const httpHeaders = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer '+this.token.get());
    return this.http.get(`${this.baseUrl}/deleteStudent/`+id+'/'+subject_id,{headers: httpHeaders,responseType: 'text'});
  }
}