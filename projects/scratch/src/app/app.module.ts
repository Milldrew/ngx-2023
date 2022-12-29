import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Milld3PieChartModule } from 'projects/ngx-milld3/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Milld3PieChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
