import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent {
  @Input() title!: string;
  @Input() poster!: string;
  @Input() favorite!: boolean;
}
