import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css',
})
export class DogComponent {
  @Input() pet?: { name: string; description: string; image: string };
}
