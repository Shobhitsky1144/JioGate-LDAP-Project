import { CommonService } from './shared/common.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OverviewService {
  public url = this.commonService.url;
  constructor(public commonService: CommonService, public http: HttpClient) {}
  getSocietyData() {
    return this.http.get(this.url + 'user-reports');
  }
  getStateData() {
    return this.http.get(this.url + 'society-reports');
  }
  getEntryData(data: string) {
    return this.http.get(`${this.url}entry-reports?type=${data}`);
  }
}
