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
  todos: Todos[]=[];
  constructor() {}

  ngOnInit(): void {
    const storedItems = localStorage.getItem('todos');
    if(storedItems) {
      this.todos = JSON.parse(storedItems);
    }
  }

  todoDeleteMain(todo: Todos) {
    console.log('Delete Todo', todo);
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    this.updateLocalStorage();
  }

  todoCheckMain(todo: Todos) {
    console.log('Check Todo', todo);
    this.todos.map((t) => {
      if (t.id === todo.id) {
        t.completed = !t.completed;
      }
      return t;
    });
    this.updateLocalStorage();
  }

  addTodoMain(todo: Todos) {
    console.log('Add Todo', todo);
    this.todos.push(todo);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
