import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'milldrew-stream-panel',
  templateUrl: './stream-panel.component.html',
  styleUrls: ['./stream-panel.component.scss'],
})
export class StreamPanelComponent implements OnInit {
  constructor() {}
  @Input()
  streamHeader: string;

  ngOnInit(): void {}
}
