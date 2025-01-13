import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TomasService } from 'src/app/services/tomas.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Tomas } from 'src/app/interfaces/tomas';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [MatSidenavModule, MatTableModule, MatPaginatorModule,IonButtons, IonContent, 
    IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar],

})
export class DashboardComponent  implements OnInit {

  displayedColumns: string[] = ['Clave de usuario','Alias','verMas'];
  dataSource = new MatTableDataSource<Tomas>();
  tomasRegistradas!: Tomas[]; 

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
      this.tomasRegistradas = data
      this.dataSource.data = this.tomasRegistradas;
    })
  }


  logout(){
    localStorage.clear();
    this.router.navigate(['login'])
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  delete(id:number){
    console.log(id)
    this.tomasService.deleteToma( id ).subscribe((data)=>{
      console.log('usuario eliminado')
    })
  }

}

