import { Component, OnInit } from '@angular/core';
import {
  CompletedLists,
  CompletedListService,
} from '../core/services/completed-list.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  completedLists: CompletedLists;
  constructor(public completedListService: CompletedListService) {
    this.completedLists = this.completedListService.completedLists;
  }

  ngOnInit(): void {}
}
