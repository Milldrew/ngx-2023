import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamPanelComponent } from './stream-panel/stream-panel.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [StreamPanelComponent],
  imports: [CommonModule, MatExpansionModule, MatCardModule],
  exports: [StreamPanelComponent],
})
export class MillterialStreamPanelModule {}
