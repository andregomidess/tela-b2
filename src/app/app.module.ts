import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { CardLoginComponent } from './tela-login/card-login/card-login.component';
import { FormLoginComponent } from './tela-login/card-login/form-login/form-login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { AreasCirculoComponent } from './tela-inicial/areas-circulo/areas-circulo.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    CardLoginComponent,
    FormLoginComponent,
    TelaInicialComponent,
    AreasCirculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
