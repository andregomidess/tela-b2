import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-areas-circulo',
  templateUrl: './areas-circulo.component.html',
  styleUrls: ['./areas-circulo.component.scss']
})
export class AreasCirculoComponent {

  @Input() cargo!: string;

}
