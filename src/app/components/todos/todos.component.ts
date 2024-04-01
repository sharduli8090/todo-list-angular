import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Todos } from '../../Todos';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddtodoComponent } from '../addtodo/addtodo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoItemComponent, AddtodoComponent, NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: Todos[] = [];
  noTodo: string = 'No Todos Added!';
  constructor() {}

  ngOnInit(): void {
    const storedItems = localStorage.getItem('todos');
    if (storedItems) {
      this.todos = JSON.parse(storedItems);
      this.updateNoTodo();
    }
  }

  todoDeleteMain(todo: Todos) {
    console.log('Delete Todo', todo);
    this.todos = this.todos.filter((t) => t.id !== todo.id);
    this.updateLocalStorage();
    this.updateNoTodo();
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
    this.updateNoTodo();
  }

  updateLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  updateNoTodo() {
    if (this.todos.length > 0) {
      this.noTodo = '';
    } else {
      this.noTodo = 'No Todos Added!';
    }
  }                                             
}
