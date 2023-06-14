import { Injectable } from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  confirm2(dialogInfo: any) {
    this.confirmationService.confirm({
      header: dialogInfo.header,
      message: dialogInfo.message,
      // icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Confirmed',
          detail: 'You have accepted',
        });
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
  }
}
