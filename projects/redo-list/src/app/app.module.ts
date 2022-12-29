import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RedoListComponent } from './redo-list/redo-list.component';
import { FocusDirective } from './core/directives/focus.directive';

@NgModule({
  declarations: [AppComponent, RedoListComponent, FocusDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
