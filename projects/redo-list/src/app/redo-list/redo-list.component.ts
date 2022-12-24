import {
  CurrentListService,
  RedoList,
  Todo,
} from '../core/services/current-list.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { LocalforageService } from '../core/services/database/localforage.service';

@Component({
  selector: 'milldrew-redo-list',
  templateUrl: './redo-list.component.html',
  styleUrls: ['./redo-list.component.scss'],
})
export class RedoListComponent {
  redoList: RedoList | any;
  constructor(
    public currentListService: CurrentListService,
    public localforageService: LocalforageService
  ) {
    this.redoList = {};

    this.localforageService
      .getItem('redoList')
      .then((data: any) => {
        if (data.todos) {
          this.redoList = data;
          this.currentListService.redoList = this.redoList;
        } else {
          this.redoList = this.currentListService.redoList;
        }
      })
      .catch((_error) => {
        this.redoList = this.currentListService.redoList;
      });
  }
  handleTodoToggle(todo: Todo) {
    todo.isFinished = !todo.isFinished;
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
    const newTodo: Todo = { name: '', isFinished: false };
    this.currentListService.addTodo(newTodo);
    this.editedTodo = newTodo;
    this.isEditingTodo = true;
  }
  ngAfterContentInit() {
    if (typeof this.redoList !== 'object') {
      this.redoList = this.currentListService.redoList = {
        name: 'Redo List',
        isFinished: false,
        todos: [],
        date: new Date().toString(),
      };
    }
  }
}
