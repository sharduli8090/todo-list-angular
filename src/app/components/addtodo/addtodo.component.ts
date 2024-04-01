import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-addtodo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtodo.component.html',
  styleUrl: './addtodo.component.css'
})
export class AddtodoComponent implements OnInit{
  ngOnInit(): void { 
  }
  public title: string = '';  // Title of the todo
  public description: string = ''; // Description of the todo
  onSubmit(){

  }

}
