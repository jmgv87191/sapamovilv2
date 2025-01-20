import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TomasService } from 'src/app/services/tomas.service';
import { AgregarToma } from 'src/app/interfaces/tomas';
import { IonItem, IonLabel, IonSpinner,IonHeader, IonToolbar, IonButtons,
  IonTitle
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-agregar-tomas',
  templateUrl: './agregar-tomas.component.html',
  styleUrls: ['./agregar-tomas.component.scss'],
  imports: [MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule,
    RouterLink, ReactiveFormsModule, IonItem, IonLabel, IonSpinner,IonHeader,IonToolbar,
    IonButtons, IonTitle

  ],

})
export class AgregarTomasComponent  implements OnInit {
  
  form:FormGroup;
  loader: boolean = false;

  constructor(  
    private fb: FormBuilder,
    private tomasService:TomasService,
    private router:Router
  ) {

    this.form = this.fb.group({
      cveusu:'17110195',
      alias:'asdasd'
    })

  }

  ngOnInit(
    
  ) {
    console.log("juan manuel".length)
  }

  agregarUsuario( form: AgregarToma ){

    const toma: AgregarToma ={
      cveusu: this.form.value.cveusu,
      alias: this.form.value.alias
    }

    this.loader = true;

    console.log('toma',toma)
    this.tomasService.agregarUsuario( toma ).subscribe(()=>{
      console.log('agregado')
      this.loader = false;
      this.router.navigate(['dashboard'])
    })
    
  }

  regresar(){
    this.router.navigate(['/dashboard'])
  }



}
