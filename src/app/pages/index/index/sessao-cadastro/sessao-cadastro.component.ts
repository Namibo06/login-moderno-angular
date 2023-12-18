import { Component, OnInit,Input } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-sessao-cadastro',
  templateUrl: './sessao-cadastro.component.html',
  styleUrls: ['./sessao-cadastro.component.css']
})
export class SessaoCadastroComponent implements OnInit {

btn:string="Criar Cadastro";
@Input() btnCadastro:string="";
@Input() btnLogin:string="";

  constructor() { }

  ngOnInit(): void {
    feather.replace();
  }

  mudarParaCriarConta(){
    if(this.btn === this.btnCadastro){
      this.btn = this.btnLogin;
    }else{
      this.btn = this.btnCadastro;
    }
    
  }
}
