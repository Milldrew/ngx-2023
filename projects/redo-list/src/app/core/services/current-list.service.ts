import { Injectable } from '@angular/core';
import { CompletedListService } from './completed-list.service';

/**
 * This is for managing the redo lists state
 *
 */
@Injectable({
  providedIn: 'root',
})
export class CurrentListService {
  redoList: RedoList;

  constructor(public completedListService: CompletedListService) {}
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
  redoListFactory(): RedoList {
    return {
      name: 'Redo List',
      isFinished: false,
      todos: [],
      date: new Date(),
    };
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
};
