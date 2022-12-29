import { Component } from '@angular/core';
const MOCK_DATA = [
  {
    name: 'A',
    value: 3,
  },
  {
    name: 'B',
    value: 5,
  },
  {
    name: 'C',
    value: 2,
  },
  {
    name: 'D',
    value: 8,
  },
  {
    name: 'E',
    value: 8,
  },
  {
    name: 'F',
    value: 8,
  },
  {
    name: 'G',
    value: 8,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pieChartData = MOCK_DATA;
  title = 'scratch';
}
