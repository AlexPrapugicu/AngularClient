import {Component} from '@angular/core';
import {AuthComponent} from './auth/auth.component';
import {delay} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  authState: Subscription;
  isAuthenticated = false;

  constructor(private auth: AuthService) {
    this.authState = this.auth.getLogStatus().subscribe(value => {
      this.isAuthenticated = value;
    });

  }


}
