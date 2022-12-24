import {
  CurrentListService,
  RedoList,
  Todo,
} from '../core/services/current-list.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'milldrew-redo-list',
  templateUrl: './redo-list.component.html',
  styleUrls: ['./redo-list.component.scss'],
})
export class RedoListComponent {
  redoList: RedoList;
  constructor(public currentListService: CurrentListService) {
    this.redoList = this.currentListService.redoList;
  }
  handleTodoToggle(todo: Todo) {
    todo.isFinished = !todo.isFinished;
  }
  deleteTodo(todo: Todo) {
    this.currentListService.removeTodo(todo.name);
  }
  editTodo(todo: Todo) {
    this.isEditingTodo = true;
  }
  stopEditing() {
    this.isEditingTodo = false;
  }
  isEditingTodo: boolean = false;
  editorsTodo: Todo['name'];
  handleEditorChange(todo: Todo) {
    todo.name = this.editorsTodo;
  }
}
