import { Component } from '@angular/core';
import { CurrentListService } from './core/services/current-list.service';
import { LocalforageService } from './core/services/database/localforage.service';
import { ProgressService } from './core/services/progress.service';
import { MOCK_DATA } from './progress/progress.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public progressService: ProgressService,
    public currentListService: CurrentListService,
    public localforageService: LocalforageService
  ) {
    this.localforageService
      .getItem('redoList')
      .then(async (data: any) => {
        if (data.todos) {
          this.currentListService.redoList = data;
        } else {
          this.currentListService.redoList =
            await this.currentListService.redoListFactory();
        }
        this.progressService.updateProgress(
          this.currentListService.redoList.todos
        );
      })
      .catch(async (_error) => {
        this.currentListService.redoList =
          await this.currentListService.redoListFactory();
        this.progressService.updateProgress(
          this.currentListService.redoList.todos
        );
      });
  }
  pieChartData = MOCK_DATA;
}
