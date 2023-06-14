import { Component } from '@angular/core';

@Component({
  selector: 'app-request-raised',
  templateUrl: './request-raised.component.html',
  styleUrls: ['./request-raised.component.scss'],
})
export class RequestRaisedComponent {
  value: string;
  cities: any[];
  status: any[];
  selectedCity: any;
  selectedStatus: any;
  columns: any[];
  data: any[];
  ngOnInit() {
    this.columns = [
      { field: 'Sr', header: 'Sr. No' },
      { field: 'Request', header: 'Request Type' },
      { field: 'Raised', header: 'Raised By' },
      { field: 'Date', header: 'Date' },
      { field: 'Society', header: 'Society' },
      { field: 'Status', header: 'Status' },
      { field: 'Details', header: 'Details' },
    ];
    this.data = [
      {
        Sr: 1,
        Request: 'Demo Request',
        Raised: 'Tom Cruise',
        Date: 'May 26, 2019 12:15',
        Society: 'abc society',
        Status: 'Pending',
        Details: 'Details',
      },
      {
        Sr: 1,
        Request: 'Demo Request',
        Raised: 'Pending',
        Date: 'Details',
        Society: 30,
        Status: 'In-progress',
        Details: 'Details',
      },
      {
        Sr: 1,
        Request: 'Demo Request',
        Raised: 'Pending',
        Date: 'Details',
        Society: 30,
        Status: 'Closed',
        Details: 'Details',
      },
    ];
    this.cities = [
      { name: 'Issue' },
      { name: 'Demo' },
      { name: 'Query' },
      { name: 'Others' },
    ];
    this.status = [
      { name: 'Pending' },
      { name: 'Working In Progress' },
      { name: 'Closed' },
    ];
  }
}
