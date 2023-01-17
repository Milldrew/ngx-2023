import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'millterial-stream-panel',
  templateUrl: './stream-panel.component.html',
  styleUrls: ['./stream-panel.component.scss'],
})
export class StreamPanelComponent implements OnInit {
  constructor() {}
  @Input()
  streamHeader: string;
  @Input()
  description: string;
  @Input()
  avatarUrl: string;
  @Input()
  parsedAvatarUrl: { 'background-image': string };

  ngOnInit(): void {}

  ngOnChanges() {
    this.parsedAvatarUrl = {
      'background-image': this.avatarUrl
        ? `url("${this.avatarUrl}"`
        : 'url("https://material.angular.io/assets/img/examples/shiba1.jpg")',
    };
  }
}
