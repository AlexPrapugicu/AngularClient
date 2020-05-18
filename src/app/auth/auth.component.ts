import {Component, ElementRef, Injectable, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {AuthResponseData, AuthService} from './auth.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

@Injectable()
export class AuthComponent {
  public isLogged = new Subject<boolean>();

  isLoginMode = true;
  isLoading = false;
  logState = false;
  error: string = null;

  constructor(private authService: AuthService) {
  }

  onLogIn() {
    this.isLogged.next(this.logState);
  }

  onSwitch() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;
    this.logState = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }
    authObs.subscribe(respData => {
        console.log(respData);
        this.isLoading = false;
        this.onLogIn();
        delay(2500);
      }
      , errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      });
    form.reset();
  }
}


