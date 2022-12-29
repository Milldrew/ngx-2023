import { Component } from '@angular/core';
import { LocalforageService } from './core/services/database/localforage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'redo-list';
  constructor() {}
}
