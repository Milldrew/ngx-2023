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
}
