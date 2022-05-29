import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular_practice';

  isMenuClick = true;
  isCollapse = false;

  onCollapse() {
    this.isCollapse = !this.isCollapse;
  }
  constructor() {}
}
