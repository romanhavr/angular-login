import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
// import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  private url = 'http://35.228.86.127:8080';
  teachers = [];
  students = [];

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) { }

  signIn(userData): Observable<any> {
    return this.http.post<any>(`${this.url}/signin`, userData, { observe: 'response' })
    .pipe(
      // tap(resp => console.log('signing in...', resp.headers.get('Authorization'))),
      catchError(this.handleError<any[]>('signed in', []))
    );
  }

  getTeachers(): Observable<any[]> {
    return this.http.get<any>(`${this.url}/teachers`, httpOptions)
    .pipe(
      tap(resp => this.teachers = resp.data),
      catchError(this.handleError<any[]>('getTeachers', []))
    );
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any>(`${this.url}/students/classes/15`, httpOptions)
    .pipe(
      tap(resp => this.students = resp.data),
      catchError(this.handleError<any[]>('getStudents', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      // this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
}
