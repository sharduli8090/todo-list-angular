import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todos } from '../../Todos';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-addtodo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.css',
})
export class AddtodoComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}
  public title: string = ''; // Title of the todo
  public description: string = ''; // Description of the todo
  public error: string = ''; // Error message
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
      this.error = '';
    } else {
      this.error = 'Please fill out all the fields.';
    }
    this.title = '';
    this.description = '';
  }
}
