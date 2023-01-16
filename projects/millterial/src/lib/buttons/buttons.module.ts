import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CreateStreamButtonComponent } from './create-stream/create-stream-button.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [CreateStreamButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule],
  exports: [CreateStreamButtonComponent],
})
export class MillterialButtonModule {}
