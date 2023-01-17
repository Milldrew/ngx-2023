import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'millterial-create-stream-button',
  templateUrl: './create-stream-button.component.html',
  styleUrls: ['./create-stream-button.component.scss'],
})
export class CreateStreamButtonComponent {
  @Output()
  clickEvent: EventEmitter<null>;
  constructor() {
    this.clickEvent = new EventEmitter();
  }
  handleClick() {
    this.clickEvent.emit(null);
  }
}
