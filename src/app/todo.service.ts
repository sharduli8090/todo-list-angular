// todo.service.ts

import { Injectable } from '@angular/core';
import { Todos } from './Todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todos[] = []; 

  constructor() {}
  ngOnInit(): void {
    const storedItems = localStorage.getItem('todos');
    if (storedItems) {
      this.todos = JSON.parse(storedItems); 
    }
  }
  // Method to get all todos
  getTodos(): Todos[] {
    const storedItems = localStorage.getItem('todos');
    if (storedItems) {
      this.todos = JSON.parse(storedItems); 
    }
    console.log('At Service');
    return this.todos;
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

  getNoTodo() : string {
    if (this.todos.length > 0) {
      return "";
    } else {
      return 'No Todos Added!';
    }
  }
}
