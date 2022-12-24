import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'milldrew-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent {
  @Output()
  createTodo: EventEmitter<any> = new EventEmitter();
  constructor() {}

  handleCreateTodoButton() {
    this.createTodo.emit('NEW TODO EVENT');
  }
}
