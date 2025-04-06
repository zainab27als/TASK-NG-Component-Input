import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rabbit',
  standalone: true,
  imports: [],
  templateUrl: './rabbit.component.html',
  styleUrl: './rabbit.component.css',
})
export class RabbitComponent {
  @Input() pet?: { name: string; description: string; image: string };
}
