import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './components/guards/auth.guard';
import { auth2Guard } from './components/guards/auth2.guard';
import { AgregarTomasComponent } from './components/agregar-tomas/agregar-tomas.component';
import { VerMasComponent } from './components/ver-mas/ver-mas.component';
import { RecaudacionComponent } from './compoents/recaudacion/recaudacion.component';
import { PagosComponent } from './compoents/pagos/pagos.component';
import { TandeoComponent } from './compoents/tandeo/tandeo.component';
import { QuejasFugasComponent } from './compoents/quejas-fugas/quejas-fugas.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path:'login',
    component: LoginComponent,
    canActivate: [auth2Guard]

  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path:'agregarToma',
    component: AgregarTomasComponent,
    canActivate: [authGuard]
  },
  {
    path:'verMas/:id',
    component: VerMasComponent,
    canActivate: [authGuard]
  },
  {
    path:'recaudacion',
    component: RecaudacionComponent
  },
  {
    path:'pagos',
    component: PagosComponent
  },
  {
    path:'tandeo',
    component: TandeoComponent
  },
  {
    path:'quejas-fugas',
    component: QuejasFugasComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
