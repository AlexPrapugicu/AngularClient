import {Component, OnInit} from '@angular/core';
import {AuthComponent} from './auth/auth.component';
import {delay} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }
}
