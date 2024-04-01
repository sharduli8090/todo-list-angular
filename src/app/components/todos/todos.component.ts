import { Component, OnInit } from '@angular/core';
import { Todos } from '../../Todos';
import { NgFor } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddtodoComponent } from '../addtodo/addtodo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoItemComponent, AddtodoComponent],
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
      }
    ];
  }

  ngOnInit(): void {}

  todoDeleteMain(todo: Todos) {
    console.log('Delete Todo', todo);
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }

  todoCheckMain(todo: Todos) {
    console.log('Check Todo', todo);
    this.todos.map((t) => {
      if (t.id === todo.id) {
        t.completed = !t.completed;
      }
      return t;
    });
  }

  addTodoMain(todo: Todos) {
    console.log('Add Todo', todo);
    this.todos.push(todo);
  }
}
