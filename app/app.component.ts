import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button (click)="fun()">Click me!</button>&nbsp;&nbsp;{{name}}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  name="Marvellous Infosystems";
  fun(){this.name="Button Clicked"}  
}
