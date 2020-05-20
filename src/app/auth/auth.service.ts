import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, Subject, throwError} from 'rxjs';
import {User} from './user.model';


export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}


@Injectable({providedIn: 'root'})
export class AuthService {

  user = new Subject<User>();
  logStatusChanged = new Subject<boolean>();

  private logStatus = false;

  constructor(private http: HttpClient) {
  }

  onLogIn(status: boolean) {
    this.logStatus = status;
    this.logStatusChanged.next(this.logStatus);
  }

  getLogStatus(): Observable<boolean> {
    return this.logStatusChanged.asObservable();
  }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCbEYcWVHDsTjjs7gJYUKoWzM9clejWnLk',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(
      catchError(this.errorHandler),
      tap(respData => {
        this.authHandler(
          respData.email,
          respData.localId,
          respData.idToken,
          +respData.expiresIn
        );
      }));
  }


  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCbEYcWVHDsTjjs7gJYUKoWzM9clejWnLk',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(
      catchError(this.errorHandler),
      tap(respData => {
        this.authHandler(
          respData.email,
          respData.localId,
          respData.idToken,
          +respData.expiresIn
        );
      })
    );
  }

  private authHandler(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(
      new Date().getTime() + expiresIn * 1000);
    const user = new User(
      email,
      userId,
      token,
      expirationDate);
    this.user.next(user);
  }

  private errorHandler(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct';
    }
    return throwError(errorMessage);
  }
}
