import {Component, ElementRef, Injectable, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {AuthResponseData, AuthService} from './auth.service';
import {delay} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

@Injectable()
export class AuthComponent {


  isLoginMode = true;
  isLoading = false;
  logState = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  isLogged = new Subject<boolean>();

  onLogIn() {
    this.logState = true;
    return this.isLogged.next(this.logState);
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
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }
    authObs.subscribe(
      respData => {
        console.log(respData);
        this.isLoading = false;
        this.onLogIn();
        console.log(this.logState);
        this.router.navigate(['/home']);
      }
      , errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      });
    form.reset();
  }
}


