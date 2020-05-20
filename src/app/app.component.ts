import {Component} from '@angular/core';
import {AuthComponent} from './auth/auth.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  authState = false;

  constructor(private auth: AuthComponent) {
  }

  checkState() {
    this.auth.isLogged.subscribe(value => {
      this.authState = value;
    });
  }


}
