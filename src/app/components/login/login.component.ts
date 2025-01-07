import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [MatButtonModule, MatDividerModule, MatIconModule, ReactiveFormsModule,
    FormsModule, MatFormFieldModule, MatInputModule
  ],

})
export class LoginComponent  implements OnInit {
  
  form: FormGroup

  constructor( 
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      email:[ '', Validators.required ],
      password:[ '', Validators.required ],
    })
  }


  ngOnInit() {}

}
