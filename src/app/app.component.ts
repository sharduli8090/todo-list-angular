import { Component } from '@angular/core';
import {
  RouterModule,
  RouterOutlet,
  Routes,
  RouterLink,
} from '@angular/router';
import { TodosComponent } from './components/todos/todos.component'; // Importing TodosComponent
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodosComponent,
    FormsModule,
    HeaderComponent,
    FooterComponent,
    AddtodoComponent,
    RouterLink,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {}
  
}
