import { Component } from '@angular/core';
import { StyleManagerService } from './style-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular_practice';

  isDark = this.styleManager.isDark;

  constructor(private styleManager: StyleManagerService) {}

  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme();
    this.isDark = !this.isDark;
  }
}
