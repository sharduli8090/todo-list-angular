import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todos | undefined;
  @Output() todoDeleteEvent: EventEmitter<Todos> = new EventEmitter();
  @Output() todoCheckEvent: EventEmitter<Todos> = new EventEmitter();
  ngOnInit(): void {}

  todoDelete(): void {
    if (this.todo) {
      this.todoDeleteLogic(this.todo);
    }
  }
  todoCheck(): void {
    if (this.todo) {
      this.todoCheckLogic(this.todo);
    }
  }
  todoCheckLogic(todo: Todos): void {
    this.todoCheckEvent.emit(todo);
    console.log('Event Check Emitted');
  }
  todoDeleteLogic(todo: Todos): void {
    this.todoDeleteEvent.emit(todo);
    console.log('Event Delete Emitted');
  }
}
