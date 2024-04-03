import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterModule, RouterLink],
  templateUrl: './header.component.html',
  styles: `.opacity-custom {
    background-color: rgba(99,9,9, 0.1); 
  }`,
})
export class HeaderComponent {
  button1Active: boolean = false;
  button2Active: boolean = true;
  btn_route_common: string = ' px-10 py-2 rounded  text-md';

  toggleButton1(): void {
    if (!this.button1Active) {
      this.button1Active = !this.button1Active;
      this.button2Active = false; // Ensure only one button is active at a time
    }
  }

  toggleButton2(): void {
    if (!this.button2Active) {
      this.button2Active = !this.button2Active;
      this.button1Active = false; // Ensure only one button is active at a time
    }
  }
}
