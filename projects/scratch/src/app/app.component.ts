import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  streamHeader = 'Stream Header for my stream';
  buttonClicked() {
    console.log('button clicked');
  }
}
