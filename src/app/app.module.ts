import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddtodoComponent } from './components/addtodo/addtodo.component';
import { TodosComponent } from './components/todos/todos.component'; // Import TodosComponent

@NgModule({
        declarations: [], // Remove AddtodoComponent from declarations
        imports: [BrowserModule, AddtodoComponent,TodosComponent], // Add AddtodoComponent to imports
        providers: [],
        bootstrap: []
})  
export class AppModule { 
    constructor(private appRef: ApplicationRef) {
        this.appRef.bootstrap(AppComponent);
    }
}
