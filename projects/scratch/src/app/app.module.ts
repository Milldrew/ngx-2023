import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MillterialButtonModule } from '../../../millterial/src/public-api';
import { MillterialStreamPanelModule } from '../../../millterial/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MillterialButtonModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatTooltipModule,
    MillterialStreamPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
