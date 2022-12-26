const MOCK_PROGRESS: Progress = [
  {
    successCount: 1,
    failureCount: 1,
    isOnCurrentList: true,
    name: "ERROR ITEM YOUR KEY DOESN'T EXIST",
  },
];
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
  updateTodos(currentTodos: RedoList['todos'], progress: Progress): Progress {
    const currentNames = currentTodos.map((todo) => todo.name);
    const oldNonCurrentTodos: SubmittedTodo[] = progress.filter(
      (todo) => !currentNames.includes(todo.name)
    );
    oldNonCurrentTodos.forEach((todo) => (todo.isOnCurrentList = false));
    const oldCurrentTodos: SubmittedTodo[] = progress.filter((todo) =>
      currentNames.includes(todo.name)
    );
    oldCurrentTodos.forEach((todo) => (todo.isOnCurrentList = true));
    const oldCurrentTodoNames = oldCurrentTodos.map((todo) => todo.name);
    const updatedSubmits = currentTodos
      .filter((todo) => oldCurrentTodoNames.includes(todo.name))
      .map((currentTodo): SubmittedTodo => {
        const matchingTodo = progress.find(
          (todo) => todo.name === currentTodo.name
        );
        if (!matchingTodo) return MOCK_PROGRESS[0];
        if (currentTodo.isFinished) {
          matchingTodo.successCount += 1;
        } else {
          matchingTodo.failureCount += 1;
        }
        return matchingTodo;
      });
    const newSubmits = currentTodos
      .filter((todo) => !oldCurrentTodoNames.includes(todo.name))
      .map((currentTodo): SubmittedTodo => {
        const name = currentTodo.name;
        const isOnCurrentList = true;
        let failureCount;
        let successCount;
        if (currentTodo.isFinished) {
          failureCount = 0;
          successCount = 1;
        } else {
          failureCount = 1;
          successCount = 0;
        }
        return { name, failureCount, successCount, isOnCurrentList };
      });
    console.log(
      { newSubmits },
      { updatedSubmits },
      { oldCurrentTodos },
      { oldNonCurrentTodos },
      'end'
    );
    const allTodos = [...newSubmits, ...updatedSubmits, ...oldNonCurrentTodos];
    return allTodos;
  }
  /**
   * Takes the todos of the current redo list and updates the progress object
   */
  async updateProgress(currentTodos?: RedoList['todos']): Promise<Progress> {
    return this.localforageService
      .getItem<Progress>('progress')
      .then((progress: Progress | null) => {
        if (progress) {
          this.progress = progress;
        }
        if (currentTodos) {
          console.log(currentTodos, this.progress, 'from update');
          this.progress = this.updateTodos(currentTodos, this.progress);
        }
        this.setProgress();
        return this.progress;
      })
      .catch((_error) => {
        this.progress = MOCK_PROGRESS;
        if (currentTodos) {
          console.log(currentTodos, this.progress, 'from update');
          this.progress = this.updateTodos(currentTodos, this.progress);
        }
        this.setProgress();
        return this.progress;
      });
  }
  setProgress() {
    return this.localforageService.setItem('progress', this.progress);
  }
  getProgress() {
    return this.localforageService.getItem<Progress>('progress');
  }
}

/**
 * Contains an object whos keys represent the users todo goal, and the value of that key represents the.
 */
type Progress = SubmittedTodo[];

/**
 * Contains the state of the todo
 */
type SubmittedTodo = {
  name: string;
  isOnCurrentList: boolean;
  successCount: number;
  failureCount: number;
};
