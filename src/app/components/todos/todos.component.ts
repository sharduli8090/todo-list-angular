import { Component, OnInit } from '@angular/core';
import { Todos } from '../../Todos';
import { NgFor } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: Todos[];
  constructor() {
    this.todos = [
      {
        id: 1,
        title: 'Todo One',
        description: 'This is the first todo',
        completed: false,
      },
      {
        id: 2,
        title: 'Todo Two',
        description: 'This is the second todo',
        completed: true,
      },
      {
        id: 3,
        title: 'Todo Three',
        description: 'This is the third todo',
        completed: false,
      },
    ];
  }

  ngOnInit(): void { 
  }
}
