import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tandeo',
  templateUrl: './tandeo.component.html',
  styleUrls: ['./tandeo.component.scss'],
  imports: [HeaderComponent,IonicModule, CommonModule, FormsModule],
})
export class TandeoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
