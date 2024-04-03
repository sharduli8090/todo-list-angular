import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Todos } from '../../Todos';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddtodoComponent } from '../addtodo/addtodo.component';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor, TodoItemComponent, AddtodoComponent, NgIf],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: Todos[] = [];
  noTodo: string = '';
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.noTodo = this.todoService.getNoTodo();
    console.log(this.todos, 'At Todos');
  }

  todoDeleteTodos(todo:Todos):void{
    this.todoService.todoDeleteMain(todo);
    this.todos = this.todoService.getTodos();
    this.noTodo = this.todoService.getNoTodo();

  }

  todoCheckTodos(todo:Todos):void{
    this.todoService.todoCheckMain(todo);
    this.todos = this.todoService.getTodos();
    this.noTodo = this.todoService.getNoTodo();

  }

  
}
