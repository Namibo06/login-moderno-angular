import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessaoLoginComponent } from './index/sessao-login/sessao-login.component';
import { SessaoCadastroComponent } from './index/sessao-cadastro/sessao-cadastro.component';
import { ArrowComponent } from './index/arrow/arrow.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SessaoLoginComponent,
    SessaoCadastroComponent,
    ArrowComponent
  ],
  exports:[
    SessaoLoginComponent,
    SessaoCadastroComponent,
    ArrowComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class IndexModule { }
