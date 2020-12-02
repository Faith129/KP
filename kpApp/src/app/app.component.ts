import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'kpApp';
  constructor() {
    this.title = 'Spring Boot - Angular Application';
  }
}
