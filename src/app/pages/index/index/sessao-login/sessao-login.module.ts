import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessaoLoginComponent } from './sessao-login.component';


@NgModule({
  declarations: [
    SessaoLoginComponent
  ],
  exports:[
    SessaoLoginComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class SessaoLoginModule { }
