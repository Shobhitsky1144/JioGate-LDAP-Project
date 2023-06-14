import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DialogService } from '../services/shared/dialog/dialog.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public DialogService: DialogService) {}
  dialogInfo: object = {
    header: 'Confirmation',
    message: 'Are you sure you want to Log out ?',
  };
  items: MenuItem[];
  ngOnInit() {
    this.items = [
      {
        label: 'Overview',
        icon: 'overviewIcon',
        routerLink: ['/home'],
      },
      {
        label: 'Society Details',
        icon: 'societyDetailsIcon',
        routerLink:['/societydetails']
      },
      {
        label: 'Requests Raised',
        icon: 'requestedRaisedIcon',
        routerLink: ['/requestRaised'],
      },
      {
        label: 'Activities Log',
        icon: 'activitiesLogIcon',
        routerLink: ['/activityLog'],
      },
      {
        label: 'Settings',
        icon: 'settingIcon',
      },
      {
        label: 'Log Out',
        icon: 'logoutIcon',
        command: () => this.logout(),
      },
    ];
  }
  logout() {
    this.DialogService.confirm2(this.dialogInfo);
  }
}
