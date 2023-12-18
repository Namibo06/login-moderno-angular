import { Component, Input, OnInit } from '@angular/core';


import { faUserAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import * as feather from 'feather-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sessao-login',
  templateUrl: './sessao-login.component.html',
  styleUrls: ['./sessao-login.component.css']
})
export class SessaoLoginComponent implements OnInit {
  faUser = faUserAlt;
  faLock = faLock;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  iconeOlho=faEye;
  mostrarSenha:boolean=false;

  login:string="Logar";
  cadastro:string="Cadastrar";
  template:string="Cadastrar";

  @Input() TituloInicial:string="Faça Login";
  btn:string="Entrar";
  nameBtn:string="entrar";
  templateLogin:boolean=true;

  constructor() { }

  ngOnInit(): void {
    feather.replace();
  }

  mostrarEsconderSenha(){
    this.mostrarSenha= !this.mostrarSenha;
    if(!this.mostrarSenha){
      this.iconeOlho=faEye;
    }else{
      this.iconeOlho=faEyeSlash;
    }
  }

  mudarTemplate(){
    if(this.template === this.cadastro){
      this.template = this.login;
      this.TituloInicial = "Faça Cadastro";
      this.btn = "Enviar";
      this.nameBtn = "enviar";
      this.templateLogin=false;
    }else{
      this.template = this.cadastro;
      this.TituloInicial = "Faça Login";
      this.btn = "Entrar";
      this.nameBtn = this.nameBtn;
      this.templateLogin=true;
    }
  }
}
