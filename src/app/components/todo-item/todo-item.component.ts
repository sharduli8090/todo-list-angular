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
  ngOnInit(): void {}

  todoDelete(): void {
    if (this.todo) {
      this.todoDeleteLogic(this.todo);
    }
  }

  todoDeleteLogic(todo: Todos): void {
    this.todoDeleteEvent.emit(todo);
    console.log("Event Emitted");
  }
}
