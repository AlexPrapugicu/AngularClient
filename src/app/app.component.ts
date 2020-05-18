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
    // console.log(this.auth.isLogged);
    this.auth.isLogged.subscribe(value => {
      this.authState = value;
    });
  }


}
