import { Component } from '@angular/core';
import { pets } from '../data/pets';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TASK-NG-Passing-Data';
  pets = pets;
}
