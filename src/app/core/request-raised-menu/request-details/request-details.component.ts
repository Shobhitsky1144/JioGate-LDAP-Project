import { Component } from '@angular/core';
import { DialogService } from '../../services/shared/dialog/dialog.service';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss'],
})
export class RequestDetailsComponent {
  selectedCity: any;
  cities: any;
  status: any[];
  selectedStatus: any;
  constructor(public DialogService: DialogService) {}
  dialogInfo: object = {
    header: 'Confirmation',
    message: 'Are you sure you want to change the status of the issue ?',
  };
  ngOnInit() {
    this.status = [
      { name: 'Pending' },
      { name: 'Working In Progress' },
      { name: 'Closed' },
    ];
    // this.selectedStatus.name = this.status[0].name;
  }
  onDropdownChange(event: any) {
    if (this.selectedStatus?.name) {
      this.DialogService.confirm2(this.dialogInfo);
    }
  }
}
