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
import { HttpErrorResponse } from '@angular/common/http';

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
  mensaje_error: boolean = false;
  errorMessageVariable: string = '';

  constructor(  
    private fb: FormBuilder,
    private tomasService:TomasService,
    private router:Router
  ) {

    this.form = this.fb.group({
      cveusu: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      alias:['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    })

  }

  ngOnInit(
    
  ) {
    console.log("juan manuel".length)
    this.form.reset();
  }

  
  agregarUsuario( form: AgregarToma ){

    const toma: AgregarToma ={
      cveusu: this.form.value.cveusu,
      alias: this.form.value.alias
    }

    this.loader = true;
    this.form.reset();

    console.log('toma',toma)
    this.tomasService.agregarUsuario( toma ).subscribe(()=>{
      console.log('agregado')
      this.loader = false;
      this.router.navigate(['dashboard'])
    },
    (error: HttpErrorResponse) => {
      if (error.status === 403) {
        this.errorMessageVariable = 'La clave ya fue registrada por un usuario';
        console.log(this.errorMessageVariable);
        this.mensaje_error = true;

        
      } 
      if (error.status === 400) {
        this.errorMessageVariable = 'Clave de usuario incorrecta';
        console.log(this.errorMessageVariable);
        this.mensaje_error = true;

        
      } 

      this.loader = false;
    }
  )
    
  }

  regresar(){
    this.router.navigate(['/dashboard'])
    this.mensaje_error = false;
    this.form.reset();
  }



}
