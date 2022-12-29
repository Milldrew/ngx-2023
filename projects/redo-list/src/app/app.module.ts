import { NgModule, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RedoListComponent } from './redo-list/redo-list.component';
import { FocusDirective } from './core/directives/focus.directive';
import { LocalforageService } from './core/services/database/localforage.service';
import { CurrentListService } from './core/services/current-list.service';
import { CreateTodoComponent } from './redo-list/create-todo/create-todo.component';
import { TabsComponent } from './redo-list/tabs/tabs.component';
import { ProgressComponent } from './progress/progress.component';
import { PieChartDirective } from './progress/pie-chart.directive';
import { Milld3PieChartModule } from 'ngx-milld3';

@NgModule({
  declarations: [
    AppComponent,
    RedoListComponent,
    FocusDirective,
    CreateTodoComponent,
    TabsComponent,
    ProgressComponent,
    PieChartDirective,
  ],
  imports: [BrowserModule, FormsModule, Milld3PieChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements OnDestroy {
  constructor(
    public localforageService: LocalforageService,
    public currentListService: CurrentListService
  ) {}
  ngOnDestroy(): void {
    this.localforageService.setItem(
      'redoList',
      this.currentListService.redoList
    );
  }
}
