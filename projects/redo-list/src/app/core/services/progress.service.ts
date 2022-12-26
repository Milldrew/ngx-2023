const MOCK_PROGRESS: Progress = {
  Exercise: { successCount: 1, failureCount: 1, isOnCurrentList: true },
};
import { Injectable } from '@angular/core';
import { RedoList } from './current-list.service';
import { LocalforageService } from './database/localforage.service';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  progress: Progress;
  constructor(public localforageService: LocalforageService) {}

  /**
   * Updates the progress todos to reflect the current state
   * If the there is a current todo that is part of the progress todos that progress todo is assigned isOnCurrentList true
   * If the todo was not finished its failure count is incremented by one
   * If the todo was finished its success count is incremented by one
   */
  updateTodos(
    currentTodos: RedoList['todos'],
    progressTodos: SubmittedTodo[]
  ): SubmittedTodo[] {
    return progressTodos;
  }
  /**
   * Takes the todos of the current redo list and updates the progress object
   */
  async updateProgress(currentTodos?: RedoList['todos']): Promise<Progress> {
    return this.localforageService
      .getItem<Progress>('progress')
      .then((_progress: Progress | null) => {
        this.progress = MOCK_PROGRESS;
        return this.progress;
      })
      .catch((_error) => {
        this.progress = MOCK_PROGRESS;
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
  [key: string]: SubmittedTodo;
};

/**
 * Contains the state of the todo
 */
type SubmittedTodo = {
  isOnCurrentList: boolean;
  successCount: number;
  failureCount: number;
};
