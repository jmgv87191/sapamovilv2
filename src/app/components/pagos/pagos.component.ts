import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss'],
  imports: [HeaderComponent,IonicModule, CommonModule, FormsModule],
})
export class PagosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
