import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  BarraPesquisa=true;
  db;
  constructor(private route:Router,
    private activatedRoute:ActivatedRoute,
    private usuario:UsuarioService) {
      this.db = firebase.database();
  }
  CampoPesquisa;
  Dados;
  Nome:string;
  ngOnInit() {
  }
  async pesquisar(nomeProduto){
    let db=firebase.database();
    let ValorMinimo=0;

    this.Dados=[];
   // this.Dados=await this.usuario.ProcurarProduto(this.Nome);
    db.ref('produto').once('value').then(snapshot => {
      snapshot.forEach(produto => {
        if(produto.val().nome.includes(nomeProduto)){
          this.Dados=produto.val();
        }
        console.log(produto.val()); //Pega cada pessoa por vez
      });
    });
  }
  async pesquisarAvançada(nomeProduto){
    let db=firebase.database();
    let ValorMinimo=0;

    this.Dados=[];
   // this.Dados=await this.usuario.ProcurarProduto(this.Nome);
    db.ref('produto').once('value').then(snapshot => {
      snapshot.forEach(produto => {
        if(produto.val().nome.includes(nomeProduto) &&
          produto.val().preço>ValorMinimo){
          this.Dados=produto.val();
        }
        console.log(produto.val()); //Pega cada pessoa por vez
      });
    });
  }

}
