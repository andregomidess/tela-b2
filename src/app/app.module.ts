import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { CardLoginComponent } from './tela-login/card-login/card-login.component';
import { FormLoginComponent } from './tela-login/card-login/form-login/form-login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { AreasCirculoComponent } from './tela-inicial/areas-circulo/areas-circulo.component';
import { CirculoRhComponent } from './tela-inicial/areas-circulo/circulo-rh/circulo-rh.component';
import { CirculoDiretorComponent } from './tela-inicial/areas-circulo/circulo-diretor/circulo-diretor.component';
import { CirculoGestaoFinanceiraComponent } from './tela-inicial/areas-circulo/circulo-gestao-financeira/circulo-gestao-financeira.component';
import { CirculoGestorComponent } from './tela-inicial/areas-circulo/circulo-gestor/circulo-gestor.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    CardLoginComponent,
    FormLoginComponent,
    TelaInicialComponent,
    AreasCirculoComponent,
    CirculoRhComponent,
    CirculoDiretorComponent,
    CirculoGestaoFinanceiraComponent,
    CirculoGestorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
