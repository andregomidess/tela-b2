import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {

  constructor(private router: Router) {}

  navegarParaInicio(){
    this.router.navigate(['/inicio']);

  }


}
