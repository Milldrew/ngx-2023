import { Component } from '@angular/core';

@Component({
  selector: 'milldrew-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  selectedTab: 'LIST' | 'PROGRESS' = 'LIST';
  constructor() {}
  selectListTab() {
    this.selectedTab = 'LIST';
  }
  selectProgressTab() {
    this.selectedTab = 'PROGRESS';
  }
}
