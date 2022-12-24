import { NgModule, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RedoListComponent } from './redo-list/redo-list.component';
import { FocusDirective } from './core/directives/focus.directive';
import { LocalforageService } from './core/services/database/localforage.service';
import { CurrentListService } from './core/services/current-list.service';
import { CreateTodoComponent } from './redo-list/create-todo/create-todo.component';

@NgModule({
  declarations: [AppComponent, RedoListComponent, FocusDirective, CreateTodoComponent],
  imports: [BrowserModule, FormsModule],
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
