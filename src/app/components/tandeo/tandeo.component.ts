import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-tandeo',
  templateUrl: './tandeo.component.html',
  styleUrls: ['./tandeo.component.scss'],
  imports: [HeaderComponent],
})
export class TandeoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
