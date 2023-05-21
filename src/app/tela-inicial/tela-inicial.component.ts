import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.scss']
})
export class TelaInicialComponent {
  cargo: string = 'diretor';

  setCargoBackground(){
    switch (this.cargo) {
      case 'gestor':
        return '../../assets/images/Background-gestor.png';
      case 'diretor':
        return '../../assets/images/Background-diretor.png';
      case 'rh':
        return '../../assets/images/Background.png';
      case 'gestor financeiro':
        return '../../assets/images/Background-gestor-financeiro.png';
      default:
        return '../../assets/images/Background.png';
    }
  }

}
