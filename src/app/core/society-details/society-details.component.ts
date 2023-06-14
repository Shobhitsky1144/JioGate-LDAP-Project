import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-society-details',
  templateUrl: './society-details.component.html',
  styleUrls: ['./society-details.component.scss']
})
export class SocietyDetailsComponent implements OnInit{
  constructor(public router: Router) {}

  public column : any= []
  public totalRecords = 0 
  public setLimit : any
  public visible : boolean 
  public tableData:any = [];
  public selectedPeriod : any = []
  public startDateselected : any
  public endDateselected : any
  public selectedFinancialYear : any
  public financialYearList : any = []
  public selctedFinyear : any
  public filterDropDown = [
    {'limit': '10'},  
    {'limit': '20'},  
    {'limit': '50'},  
    {'limit': '100'},  
  ]
  public period = [
    {key:'byDate',name:'By Date'},
    {key:'byMonth',name:'By Month'},
    {key:'last6month',name:'Last 6 Months'},
    {key:'financialyear',name:'Financial Year'}]

  ngOnInit(){
    this.setLimit = 10
    this.column =[{ field: 'srno', header: 'Sr. No' },
      { field: 'amenityname', header: 'Amenity Name' },
      { field: 'dateofregistration', header: 'Date of Registration' },
      { field: 'citystate', header: 'City State' },
      { field: 'pincode', header: 'Pin Code' },
      { field: 'totalunits', header: 'Total Units' },
      { field: 'details', header: 'Details' }]
      this.tableData = [{'amenityname':'beverly park','dateofregistration':'May 26,2023','citystate':'Mumabi,Maharastra','pincode':400501,'totalunits':20,'details':true},
      {'amenityname':'Ameithi','dateofregistration':'May 26,2023','citystate':'Mumabi,Maharastra','pincode':400501,'totalunits':120,'details':true},
      {'amenityname':'Auram','dateofregistration':'May 26,2023','citystate':'Mumabi,Maharastra','pincode':400501,'totalunits':260,'details':true},
      {'amenityname':'shilp park','dateofregistration':'May 26,2023','citystate':'Mumabi,Maharastra','pincode':400501,'totalunits':60,'details':true},
      {'amenityname':'beverly park','dateofregistration':'May 26,2023','citystate':'Mumabi,Maharastra','pincode':400501,'totalunits':20,'details':true},
      {'amenityname':'Ameithi','dateofregistration':'May 26,2023','citystate':'Mumabi,Maharastra','pincode':400501,'totalunits':120,'details':true},
      {'amenityname':'Auram','dateofregistration':'May 26,2023','citystate':'Mumabi,Maharastra','pincode':400501,'totalunits':260,'details':true},
      {'amenityname':'shilp park','dateofregistration':'May 26,2023','citystate':'Mumabi,Maharastra','pincode':400501,'totalunits':60,'details':true},
      {'amenityname':'beverly park','dateofregistration':'May 26,2023','citystate':'Mumabi,Maharastra','pincode':400501,'totalunits':20,'details':true},
      {'amenityname':'Ameithi','dateofregistration':'May 26,2023','citystate':'Mumabi,Maharastra','pincode':400501,'totalunits':120,'details':true},
      {'amenityname':'Auram','dateofregistration':'May 26,2023','citystate':'Mumabi,Maharastra','pincode':400501,'totalunits':260,'details':true},
      {'amenityname':'shilp park','dateofregistration':'May 26,2023','citystate':'Mumabi,Maharastra','pincode':400501,'totalunits':60,'details':true}]
      this.totalRecords = this.tableData.length
  }

  limitChange(event:any){
  this.setLimit = event.value.limit
  }

  showReportPeriod(){
    this.visible = !this.visible
    let year_arr = []
    var current_year = new Date().getFullYear()
    for(let i =0; (current_year - i) >= 2021 ;i++){
     year_arr.push({year:(current_year-i) + "-" + (current_year-i+1)})
    }
    this.financialYearList = year_arr
  }

  showSpecificSocietyinfo(){
    this.router.navigate(['./societyspecific'])
  }
}
