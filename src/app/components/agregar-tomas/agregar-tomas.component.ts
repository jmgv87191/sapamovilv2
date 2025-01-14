import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TomasService } from 'src/app/services/tomas.service';
import { AgregarToma } from 'src/app/interfaces/tomas';

@Component({
  selector: 'app-agregar-tomas',
  templateUrl: './agregar-tomas.component.html',
  styleUrls: ['./agregar-tomas.component.scss'],
  imports: [MatCardModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule,
    RouterLink, ReactiveFormsModule

  ],

})
export class AgregarTomasComponent  implements OnInit {
  
  form:FormGroup;

  constructor(  
    private fb: FormBuilder,
    private tomasService:TomasService
  ) {

    this.form = this.fb.group({
      cveusu:'17110195',
      alias:'asdasd'
    })

  }

  ngOnInit() {}

  agregarUsuario( form: AgregarToma ){

    const toma: AgregarToma ={
      cveusu: this.form.value.cveusu,
      alias: this.form.value.alias
    }


    console.log('toma',toma)
    this.tomasService.agregarUsuario( toma ).subscribe(()=>{
      console.log('agregado')
    })
    
  }




}
