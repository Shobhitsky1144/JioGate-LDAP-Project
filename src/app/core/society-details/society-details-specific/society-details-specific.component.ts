import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-society-details-specific',
  templateUrl: './society-details-specific.component.html',
  styleUrls: ['./society-details-specific.component.scss']
})
export class SocietyDetailsSpecificComponent implements OnInit {
  constructor(private router:Router){}
  public soceityData : any = []
  public data : any
  public options : any
  public overallEntries : any = []
  public soceityFlatInfo : any = []

  ngOnInit(){
    this.soceityData = [{field:'Soceity Name',value:'Ameithy'},
    {field:'City',value:'Navimumbai'},
    {field:'State',value:'Maharastra'},
    {field:'Pin code',value:'4000706'},
    {field:'Address',value:'TC23'},
    {field:'Unit',value:300},
    {field:'Contact Details',value:[{name:"adminname",contactno:1234567890,email:'abc@gmail.com'},
    {name:"adminname",contactno:1234567890,email:'abc@gmail.com'},{name:"adminname",contactno:1234567890,email:'abc@gmail.com'},
  {name:"adminname",contactno:1234567890,email:'abc@gmail.com'},{name:"adminname",contactno:1234567890,email:'abc@gmail.com'},
  {name:"adminname",contactno:1234567890,email:'abc@gmail.com'}]}]

  this.data = {
    datasets: [
        {
            data: [300, 50],
            backgroundColor: ["#DAFF33","#336EFF"]
        }
    ]
};

this.soceityFlatInfo = [{id:1},{id:2},{id:3},{id:4},{id:5,imgsrc:'handicon.svg'},{id:6,imgsrc:'carBoldIcon.svg'}]

this.overallEntries = [{id:1,title:'Total Guest Entries',imgsrc:'guest.svg'},
  {id:2,title:'Total Service Provider Entries',imgsrc:'entrance-door 1.svg'},
  {id:3,title:'Total Vehicle Entries',imgsrc:'car-outline.svg'},
  {id:4,title:'Announced & Unannounced Entries',imgsrc:'Vector.svg'},
  {id:5,title:'Total Delivery Entries',imgsrc:'home-delivery 1.svg'},
  {id:6,title:'Total cab Entries',imgsrc:'taxi-cab 1.svg'}]
  }

  showSpecificSocietyinfo(){
    this.router.navigate(['./societydetails'])
  }
}
