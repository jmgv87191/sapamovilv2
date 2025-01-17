import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss'],
  imports: [HeaderComponent],
})
export class PagosComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
