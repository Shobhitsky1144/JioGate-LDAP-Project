import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-progress-bars',
  templateUrl: './vertical-progress-bars.component.html',
  styleUrls: ['./vertical-progress-bars.component.scss'],
})
export class VerticalProgressBarsComponent {
  @Input() bars: any[] = [];
}
