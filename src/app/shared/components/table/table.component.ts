import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() columns: any[];
  @Input() data: any[];
  @Input() rows: number = 2;
  @Input() type: string;
  @Input() pageLinkSize: number = 3;
  statusList: any[];
  selectedStatus: any;
  ngOnInit() {
    this.statusList = [
      { name: 'Pending' },
      { name: 'Working In Progress' },
      { name: 'Closed' },
    ];
  }
}
