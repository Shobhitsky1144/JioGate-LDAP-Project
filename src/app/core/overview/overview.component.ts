import { OverviewService } from './../services/overview.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
  data: any;
  options: any;
  barData: any[];
  cities: any[];
  liveSociety: any[];
  entryStatus: any[];
  bars: any[];
  selectedCity: any;

  constructor(public overviewService: OverviewService) {}

  ngOnInit() {
    this.getSocietyData();
    this.getEntryData();
    this.getStateData();
    this.cities = [
      { name: 'DAU' },
      { name: 'WAU' },
      { name: 'MAU' },
      // { name: 'AVG' },
    ];

    this.bars = [
      // { label: 'Maharashtra', percent: 200, color: 'red' },
    ];

    this.entryStatus = [
      {
        title: 'Service Staff',
        count: 0,
        imgBg: '#1c74d4',
        color: '#2494f4',
        img: '../../../assets/icons/service_staff.svg',
      },
      {
        title: 'Guest',
        count: 0,
        imgBg: '#e44c1c',
        color: '#fb5424',
        img: '../../../assets/icons/Guest_white.svg',
      },
      {
        title: 'Cab Entries',
        count: 0,
        imgBg: '#689f38',
        color: '#8bc34a',
        img: '../../../assets/icons/taxi-cab 1.png',
      },
      {
        title: 'Delivery Entries',
        count: 0,
        imgBg: '#5c4434',
        color: '#795548',
        img: '../../../assets/icons/delivery.svg',
      },
      {
        title: 'Service Personnel',
        count: 0,
        imgBg: '#c2185b',
        color: '#ec1c64',
        img: '../../../assets/icons/service_personel.svg',
      },
      {
        title: 'Announced Entries',
        count: 0,
        imgBg: '#455a64',
        color: '#637b8b',
        img: '../../../assets/icons/entrance-door 1.png',
      },
      {
        title: 'Un-Announced Entries',
        count: 0,
        imgBg: '#646464',
        color: '#9c9c9c',
        img: '../../../assets/icons/unannounced.svg',
      },
    ];

    this.liveSociety = [
      {
        title: 'Society Count',
        count: 0,
        class: 'society',
        img: '../../../assets/icons/societyCountIcon.svg',
      },
      {
        title: 'Total Active Resident',
        count: 0,
        class: 'resident',
        img: '../../../assets/icons/apartment.svg',
      },
      {
        title: 'Total un-registered users',
        count: 0,
        class: 'users ',
        img: '../../../assets/icons/unregisteredUserIcon.svg',
      },
      {
        title: 'Total Active Guards',
        count: 0,
        class: 'guards',
        img: '../../../assets/icons/guardIcon.svg',
      },
    ];
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
  }

  getSocietyData() {
    this.overviewService.getSocietyData().subscribe((res: any) => {
      if (res.code == 200) {
        this.liveSociety[1].count = res.data.activeResident;
        this.liveSociety[2].count = res.data.unregisteredResidents;
        this.liveSociety[3].count = res.data.activeGuards;
      }
    });
  }

  getStateData() {
    this.overviewService.getStateData().subscribe((res: any) => {
      if (res.code == 200) {
        this.bars = res.data.stateWiseSociety;
        // console.log(this.bars);
      }
    });
  }

  getEntryData(data = 'DAU') {
    this.overviewService.getEntryData(data).subscribe((res: any) => {
      if (res.code == 200) {
        this.entryStatus[0].count = res.data.serviceProvider;
        this.entryStatus[1].count = res.data.guest;
        this.entryStatus[2].count = res.data.cab;
        this.entryStatus[3].count = res.data.delivery;
        this.entryStatus[4].count = res.data.servicePersonnel;
        this.entryStatus[5].count = res.data.announced;
        this.entryStatus[6].count = res.data.unannounced;
      }
    });
  }
}
