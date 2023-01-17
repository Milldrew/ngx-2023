import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamPanelComponent } from './stream-panel/stream-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [StreamPanelComponent, AccordionComponent],
  imports: [CommonModule, MatExpansionModule, MatCardModule, MatButtonModule],
  exports: [StreamPanelComponent, AccordionComponent],
})
export class MillterialStreamPanelModule {}
