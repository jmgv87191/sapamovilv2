import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-quejas-fugas',
  templateUrl: './quejas-fugas.component.html',
  styleUrls: ['./quejas-fugas.component.scss'],
  imports: [HeaderComponent,MatCardModule, MatButtonModule],
})
export class QuejasFugasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
