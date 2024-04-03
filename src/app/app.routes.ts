import { Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { AddtodoComponent } from './components/addtodo/addtodo.component';

export const routes: Routes = [
  { path: '', redirectTo: '/addtodos', pathMatch: 'full' },
  { path: 'todos', component: TodosComponent },
  { path: 'addtodos', component: AddtodoComponent },
  { path: '**', redirectTo: '/addtodos', pathMatch: 'full' },
];
