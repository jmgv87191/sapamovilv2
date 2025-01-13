import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TomasService } from 'src/app/services/tomas.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Tomas } from 'src/app/interfaces/tomas';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [MatSidenavModule, MatTableModule, MatPaginatorModule],

})
export class DashboardComponent  implements OnInit {

  displayedColumns: string[] = ['Clave de usuario','Alias'];
  dataSource = new MatTableDataSource<Tomas>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  constructor( 
    private router: Router,
    private tomasService: TomasService
  ) { }

  ngOnInit() {

    this.getProducts()

  }

  getProducts(){
    this.tomasService.getTomas().subscribe((data)=>{
      console.log(data)
    })
  }


  logout(){
    localStorage.clear();
    this.router.navigate(['login'])
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

