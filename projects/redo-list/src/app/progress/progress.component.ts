export const MOCK_DATA = [
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

import { Component, OnInit } from '@angular/core';
import {
  ProgressService,
  SubmittedTodo,
} from '../core/services/progress.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  constructor(public progressService: ProgressService) {
    console.log(progressService.progress);
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    console.log(this.progressService.progress);
  }

  handleDeleteTodoButton(name: SubmittedTodo['name']) {
    this.progressService.deleteTodo(name);
  }
  pieChartData = MOCK_DATA;
  ngAfterViewChecked() {
    this.pieChartData = MOCK_DATA;
  }
}
