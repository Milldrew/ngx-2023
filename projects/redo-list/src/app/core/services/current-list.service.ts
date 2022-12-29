import { Injectable } from '@angular/core';
import { LocalforageService } from './database/localforage.service';

/**
 * This is for managing the redo lists state
 *
 */
@Injectable({
  providedIn: 'root',
})
export class CurrentListService {
  redoList: RedoList;

  constructor(public localforageService: LocalforageService) {}
  addTodo(todo: Todo) {
    this.redoList.todos.push(todo);
  }
  removeTodo(name: Todo['name']) {
    const targetsIndex = this.redoList.todos.findIndex(
      (currentTodo) => name === currentTodo.name
    );
    if (targetsIndex >= 0) {
      this.redoList.todos.splice(targetsIndex, 1);
    }
  }
  markTodoComplete(name: Todo['name']) {
    const targetTodo = this.redoList.todos.find((todo) => todo.name === name);
    if (targetTodo) {
      targetTodo.isFinished = true;
      if (this.redoList.todos.every((todo) => todo.isFinished)) {
        this.markListComplete();
      }
    }
  }
  markTodoIncomplete(name: Todo['name']) {
    const targetTodo = this.redoList.todos.find((todo) => todo.name === name);
    if (targetTodo) {
      targetTodo.isFinished = false;
      if (this.redoList.isFinished) {
        this.markListIncomplete();
      }
    }
  }

  markListComplete() {
    this.redoList.isFinished = true;
  }
  markListIncomplete() {
    this.redoList.isFinished = false;
  }
  async redoListFactory(): Promise<RedoList> {
    return this.localforageService
      .getItem<RedoList>('redoList')
      .then((list): RedoList => {
        if (list !== null) {
          return list;
        } else {
          return {
            name: 'Redo List',
            isFinished: false,
            todos: [],
            date: new Date(),
          };
        }
      })
      .catch((_error) => {
        return {
          name: 'Redo List',
          isFinished: false,
          todos: [],
          date: new Date(),
        };
      });
  }

  /**
   * Takes an array of todos and resets all the status values to pending and isFinished values to false
   */
  resetAllTodosState(redoList: RedoList) {
    redoList.isFinished = false;
    redoList.todos.forEach((todo) => {
      todo.isFinished = false;
      todo.status = 'PENDING';
    });
  }
}

export type RedoList = {
  name: 'Redo List';
  todos: Todo[];
  isFinished: boolean;
  date: Date;
};
export type Todo = {
  name: string;
  isFinished: boolean;
  status: 'PENDING' | 'SUCCESS' | 'FAILED';
  successCount?: number;
  failureCount?: number;
};
