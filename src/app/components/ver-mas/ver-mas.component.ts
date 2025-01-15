import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TomasService } from 'src/app/services/tomas.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { VerMas } from 'src/app/interfaces/tomas';
import {MatListModule} from '@angular/material/list';
import { IonContent, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.scss'],
  imports: [MatCardModule, MatButtonModule, MatListModule, RouterLink, IonItem, IonLabel, IonList],

})
export class VerMasComponent  implements OnInit {


  idToma!: number;
  masDatos: VerMas= {
    alias: '',
    cveusu: '',
    direccion: '',
    estatusContrato: '',
    mesesAdeudo: '',
    saldo: 0,
    nombre: '',
  };
  constructor(
    private aRoute: ActivatedRoute,
    private tomasService: TomasService
  ) { 

    this.idToma = Number(this.aRoute.snapshot.paramMap.get('id'))

  }

  ngOnInit() {
    console.log( this.aRoute.snapshot.paramMap.get('id') )
    this.tomasService.getMasTomas( this.idToma ).subscribe((data)=>{
      console.log(data)

      this.masDatos = {
        alias: data.toma.alias,
        cveusu: data.toma.cveusu,
        direccion: data.usuario.direccion,
        estatusContrato: data.usuario.estatusContrato,
        mesesAdeudo: data.usuario.mesesAdeudo,
        saldo: data.usuario.saldo,
        nombre: data.usuario.nombre
      }
      console.log(this.masDatos)


    })
  }


}
