import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-otter',
  standalone: true,
  imports: [],
  templateUrl: './otter.component.html',
  styleUrl: './otter.component.css',
})
export class OtterComponent {
  @Input() pet?: { name: string; description: string; image: string };
}
