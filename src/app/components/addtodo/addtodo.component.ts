import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todos } from '../../Todos';
import { TodoService } from '../../todo.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-addtodo',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.css',
})
export class AddtodoComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}
  public title: string = ''; // Title of the todo
  public description: string = ''; // Description of the todo
  public error: boolean = false; // Error message
  public input: string =
    'p-2 border-2 border-gray-300 rounded md:w-3/4 lg:w-4/5 shadow-gray-100 shadow-lg '; // Input field
  onSubmit() {
    if (this.title !== '' || this.description !== '') {
      console.log(this.title, this.description);
      const todo: Todos = {
        id: Math.floor(Math.random() * 100),
        title: this.title,
        description: this.description,
        completed: false,
      };
      this.todoService.addTodoMain(todo);
      this.error = false;
      alert('Todo Added Successfully!');
    } else {
      console.log(this.error);
      this.error = true;
    }
    this.title = '';
    this.description = '';
  }
}
