import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jioldap-adminportal';
  constructor(public router: Router) {}
  // public commonservice: any = { isloggedin: true, config: null };
  isLoggedIn: Boolean = true;

  ngOnInit() {
    if (window.location.pathname === '/') {
      this.isLoggedIn = false;
      // this.router.navigate([''])
    }
  }
}
