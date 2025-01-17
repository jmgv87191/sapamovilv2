import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-quejas-fugas',
  templateUrl: './quejas-fugas.component.html',
  styleUrls: ['./quejas-fugas.component.scss'],
  imports: [HeaderComponent],
})
export class QuejasFugasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
