import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  CampoPesquisa;
  Dados;
  Nome:string;
  db;
  a;
  constructor(private router:Router) {
    this.db = firebase.database();
  }
  
  public list: string[]=["Utensilios","Estruturas completas"];
  ngOnInit() {

  }
  LinkDeProduto(id:number){
    this.router.navigate(['produto',id]);
  }
  filterList(x){
    console.log(this.a);
  }
  async pesquisar(nomeProduto){
    let ValorMinimo=0;

    this.Dados=[];
   // this.Dados=await this.usuario.ProcurarProduto(this.Nome);
    this.db.ref('produto').once('value').then(snapshot => {
      snapshot.forEach(produto => {
        if(produto.val().dados.nome.toLowerCase().includes(nomeProduto.toLowerCase())){
          this.Dados.push(produto.val());console.log(this.Dados.nome); 
        }
        //Pega cada pessoa por vez
      });
    });
  }
  async pesquisarAvançada(nomeProduto){
    let ValorMinimo=0;

    this.Dados=[];
   // this.Dados=await this.usuario.ProcurarProduto(this.Nome);
    this.db.ref('produto').once('value').then(snapshot => {
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
