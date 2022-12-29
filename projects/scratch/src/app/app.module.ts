import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PieChartDirective } from './pie-chart.directive';
import { PieChartBaseDirective } from './pie-chart-base.directive';

@NgModule({
  declarations: [
    AppComponent,
    PieChartDirective,
    PieChartBaseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
