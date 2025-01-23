import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
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
  IonFooter,
  IonList,
  IonIcon,
  IonInput
} from '@ionic/angular/standalone';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { IonItem, IonLabel, IonSpinner } from '@ionic/angular/standalone';
import { filter } from 'rxjs/operators';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [MatSidenavModule, MatTableModule, MatPaginatorModule,IonButtons, IonContent, 
    IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar, IonFooter,MatButtonModule, MatDividerModule, MatIconModule,
    RouterLink, IonItem, IonSpinner, IonList, IonIcon, IonInput
  ],

})
export class DashboardComponent  implements OnInit {

  displayedColumns: string[] = ['Clave de usuario','Alias','verMas'];
  dataSource = new MatTableDataSource<Tomas>();
  tomasRegistradas!: Tomas[]; 
  loader: boolean = true;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  constructor( 
    private router: Router,
    private tomasService: TomasService,
    private platform: Platform
  ) { 
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getProducts()

      });  
    }

  ngOnInit() {

    this.getProducts()

  }

  getProducts() {
    this.loader = true;
  
    this.tomasService.getTomas().subscribe((data) => {
      this.tomasRegistradas = data;
      this.dataSource.data = this.tomasRegistradas;
  
      // Reasigna el paginator cada vez que los datos se actualizan
      this.dataSource.paginator = this.paginator;
      this.loader = false;
    });
  }
  
  logout(){
    sessionStorage.clear();
    this.router.navigate(['login'])
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  delete(id:number){
    console.log(id)
    this.tomasService.deleteToma( id ).subscribe((data)=>{

      this.getProducts()

    })
  }

  verMas( claveUsuario:number ){
    this.tomasService.getMasTomas(claveUsuario).subscribe((data)=>{
    })
  }

  onClick1(){
    this.router.navigate(['recaudacion'])
  }

  onClick2(){
    this.router.navigate(['pagos'])
  }

  onClick3(){
    this.router.navigate(['tandeo'])
  }

  onClick4(){
    this.router.navigate(['quejas-fugas'])
  }




}

