import { Injectable } from '@angular/core';
import { RedoList } from './current-list.service';
import { LocalforageService } from './database/localforage.service';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  constructor(public localforageService: LocalforageService) {}
  progress: Progress;
  /**
   * Takes the todos of the current redo list and updates the progress object
   */
  async updateProgress(currentTodos?: RedoList['todos']): Promise<Progress> {
    return this.localforageService
      .getItem<Progress>('progress')
      .then((_progress: Progress | null) => {
        this.progress = {
          exercise: { wasFinished: true, isOnCurrentList: true },
        };
        return this.progress;
      })
      .catch((_error) => {
        this.progress = {
          exercise: { wasFinished: true, isOnCurrentList: true },
        };
        return this.progress;
      });
  }
  getProgress() {
    return this.localforageService.getItem<Progress>('progress');
  }
}

/**
 * Contains an object whos keys represent the users todo goal, and the value of that key represents the.
 */
type Progress = {
  /**
   * The key value is the name of the todo and describes the goal of the user
   */
  [key: string]: CompletedTodo;
};

/**
 * Contains the state of the todo
 */
type CompletedTodo = {
  wasFinished: boolean;
  isOnCurrentList: boolean;
};
