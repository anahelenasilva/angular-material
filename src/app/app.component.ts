import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-material';

  otherTheme: boolean = false;

  changeTheme() {
    this.otherTheme = !this.otherTheme;
  }
}