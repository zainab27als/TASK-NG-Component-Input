import { Component } from '@angular/core';
import { pets } from '../data/pets';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { RabbitComponent } from './rabbit/rabbit.component';
import { OtterComponent } from './otter/otter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatComponent, DogComponent, RabbitComponent, OtterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TASK-NG-Passing-Data';
  pets = pets;
}
