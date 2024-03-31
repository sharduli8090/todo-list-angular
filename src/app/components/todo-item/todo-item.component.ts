import { Component, Input, OnInit } from '@angular/core';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todos | undefined;

  ngOnInit(): void { 
  }
}
