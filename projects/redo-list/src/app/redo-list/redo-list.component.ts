import * as _ from 'lodash';
import {
  CurrentListService,
  RedoList,
  Todo,
} from '../core/services/current-list.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { LocalforageService } from '../core/services/database/localforage.service';
import { ProgressService } from '../core/services/progress.service';

@Component({
  selector: 'milldrew-redo-list',
  templateUrl: './redo-list.component.html',
  styleUrls: ['./redo-list.component.scss'],
})
export class RedoListComponent {
  redoList: RedoList | any;
  constructor(
    public progressService: ProgressService,
    public currentListService: CurrentListService,
    public localforageService: LocalforageService
  ) {
    this.redoList = this.currentListService.redoList;
  }
  handleTodoToggle(todo: Todo) {
    todo.isFinished = !todo.isFinished;
    this.localforageService.setItem('redoList', this.redoList);
  }
  deleteTodo(todo: Todo) {
    this.currentListService.removeTodo(todo.name);
    this.localforageService.setItem('redoList', this.redoList);
  }
  editedTodo: Todo;
  editTodo(todo: Todo) {
    this.editedTodo = todo;
    this.isEditingTodo = true;
  }
  stopEditing() {
    this.editorsTodo = '';
    this.isEditingTodo = false;
    this.localforageService.setItem('redoList', this.redoList);
  }
  isEditingTodo: boolean = false;
  editorsTodo: Todo['name'];
  handleEditorChange() {
    if (this.editedTodo) {
      this.editedTodo.name = this.editorsTodo;
    }
  }
  handleCreateTodoButton() {
    const newTodo: Todo = { name: '', isFinished: false, status: 'PENDING' };
    this.currentListService.addTodo(newTodo);
    if (!this.redoList.length) {
      this.redoList = this.currentListService.redoList;
    }
    this.editedTodo = newTodo;
    this.isEditingTodo = true;
  }
  async ngAfterContentInit() {
    if (typeof this.redoList !== 'object') {
      this.redoList = this.currentListService.redoList =
        await this.currentListService.redoListFactory();
    }
  }
  async handleSubmit() {
    let redoListCopy = _.cloneDeep(this.redoList);
    this.currentListService.resetAllTodosState(redoListCopy);
    this.localforageService.setItem('redoList', redoListCopy);
    await this.progressService
      .updateProgress(this.redoList.todos)
      .catch(console.error);
    this.currentListService.redoList = this.redoList =
      await this.currentListService.redoListFactory();
  }
  handleResetButton(todo: Todo) {
    todo.status = 'PENDING';
  }
  handleFailedButton(todo: Todo) {
    todo.status = 'FAILED';
  }
  handleSuccessButton(todo: Todo) {
    todo.status = 'SUCCESS';
  }
}
