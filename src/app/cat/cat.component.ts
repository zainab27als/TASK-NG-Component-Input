import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css',
})
export class CatComponent {
  @Input() pet?: { name: string; description: string; image: string };
}
