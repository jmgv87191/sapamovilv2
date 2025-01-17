import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-recaudacion',
  templateUrl: './recaudacion.component.html',
  styleUrls: ['./recaudacion.component.scss'],
  imports: [HeaderComponent],
})
export class RecaudacionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
