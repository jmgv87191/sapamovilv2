import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { TomasService } from 'src/app/services/tomas.service';
import { Login, ResponseLogin } from 'src/app/interfaces/tomas';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [MatButtonModule, MatDividerModule, MatIconModule, ReactiveFormsModule,
    FormsModule, MatFormFieldModule, MatInputModule, IonicModule, CommonModule
  ],

})
export class LoginComponent  implements OnInit {
  
  form: FormGroup
  errorStatus: boolean = false;
  errorMsj: any = "";
  errorMessageVariable: string = '';
  pantallaError: boolean = true;
  verPassword: boolean = false;

  constructor( 
    private fb: FormBuilder,
    private tomasService:TomasService,
    private router: Router
  ) { 
    this.form = this.fb.group({
      email:[ 'jmgv87191@gmail.com', [Validators.required, Validators.minLength(4)] ],
      password:[ 'jmsa424s', Validators.required ],
      device_name: ['toma1', Validators.required],
    })

  }

  ngOnInit() {}

  login( form: Login ){

      this.tomasService.loginByEmail( form ).subscribe((data)=>{
        console.log(data)
        let dataResponse: ResponseLogin = data;

        if (dataResponse.token) {
          sessionStorage.setItem("token",dataResponse.token )
          this.router.navigate(['dashboard'])
          // this.form.reset()

          this.form.setValue({
            email: '',
            password: '',
            device_name: 'toma1'
          });
          

        } else {
          this.errorStatus = true;
          this.errorMsj = "Error"
        }

      },
    
      (error: HttpErrorResponse) => {
        if (error.status === 422) {
  
            console.error('Usuario o contraseña incorrectos');
            this.errorMessageVariable = 'Usuario o contraseña incorrectossas ';
            console.log(this.errorMessageVariable)
            console.log(this)
            this.pantallaError = false
        
          
        } else {
          console.error('Usuario o contraseña incorrectos:', error.message);
          this.errorMessageVariable = 'Ocurrió un error Usuario o contraseña. Por favor, inténtalo de nuevo más tarde.';
        }
      }
    )

  } 
  
  ocultar() {
    this.pantallaError = true
  }

  cambiar(){
    this.verPassword = !this.verPassword
  }

}
