import { Component, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [MatSidenavModule],

})
export class DashboardComponent  implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login'])
  }

}
