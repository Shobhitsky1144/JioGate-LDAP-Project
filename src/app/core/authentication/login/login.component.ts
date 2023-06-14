import { Component, OnInit,ViewChild } from '@angular/core';
import { Table } from 'primeng/table'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{

  public email : string;
  public password : any;
  public showPassword : boolean = false ;

  ngOnInit() {
    console.log("login works ")
  }
  submit(){
    console.log("onsubmit",this.email,this.password)
  }
 

}
