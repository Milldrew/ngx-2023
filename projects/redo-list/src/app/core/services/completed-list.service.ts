import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompletedListService {
  completedLists: CompletedLists = [];
  addCompletedList(list: CompletedList) {
    this.completedLists.push(list);
  }
  removeCompletedList(list: CompletedList) {
    const targetIndex = this.completedLists.findIndex(
      (currentList) => currentList.date === list.date
    );
    if (targetIndex >= 0) {
      this.completedLists.splice(targetIndex, 1);
    }
  }
}

export type CompletedLists = CompletedList[];
export type CompletedList = {
  date: Date;
};
