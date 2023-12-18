import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  btn:string="Criar Cadastro"
  btnCadastro:string="Criar Cadastro";
  btnLogin="Fazer Login";

  constructor() { }

  ngOnInit(): void {

  }

}
