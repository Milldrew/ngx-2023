import { Component, OnInit } from '@angular/core';
import {
  CompletedLists,
  CompletedListService,
} from '../core/services/completed-list.service';
import { ProgressService } from '../core/services/progress.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent implements OnInit {
  completedLists: CompletedLists;
  constructor(public progressService: ProgressService) {
    console.log(progressService.progress);
  }

  ngOnInit(): void {}
  ngAfterViewInit() {
    console.log(this.progressService.progress);
  }
}
