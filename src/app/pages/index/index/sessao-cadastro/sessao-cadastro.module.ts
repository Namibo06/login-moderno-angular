import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessaoCadastroComponent } from './sessao-cadastro.component';


@NgModule({
  declarations: [SessaoCadastroComponent],
  exports:[
    SessaoCadastroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SessaoCadastroModule { }
