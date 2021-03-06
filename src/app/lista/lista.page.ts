import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  CampoPesquisa;
  Dados=[];
  Nome:string;
  db;
  a;
  public ImagemPrincipal;
  conjuntoDeImagens;
  constructor(private router:Router,
    private toastCtrl:ToastController) {
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
         this.ListarImagens(produto.val().dados.id);
         this.Dados.push(produto.val());
        }
        //Pega cada pessoa por vez
      });
    });
  }
  async ListarImagens(id){
    this.conjuntoDeImagens=[];
    var db=firebase.database();
    db.ref('produto').child(id)
    .child('dados').child('imagens').child('imagemPrincipal').once('value').then(snapshot => {
      snapshot.forEach(produto => {
        console.log(produto.val());
        this.CarregarImagem(id,produto.val());
        
        //this.conjuntoDeImagens.push(this.CarregarImagem('-LgBXA7jxkpxmRcvQyuU',produto.val().nome));
        //Pega cada pessoa por vez
      });
    });
      
    
  }
  CarregarImagem(id,NomeDaImagem){
  
    var storage = firebase.storage();
    var Reference = storage.refFromURL('gs://project-f72e3.appspot.com');
    var img;var a=[];
    //console.log(await this.FirebaseStore.LoadImage());
    Reference.child(id).child(NomeDaImagem)
      .getDownloadURL().then(url=> {
      
      // Or insert  ed into an <img> element:
      img = document.getElementById('myimg');
      img = url;
      this.conjuntoDeImagens.push({donoDaImagem:id,url:url});
      
      
      //console.log(url);
    }).catch(function(error) {
      // Handle any errors
      this.toastCtrl.Mensagem(error);
    });
    //this.conjuntoDeImagens.push(a);

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
         //Pega cada pessoa por vez
      });
    });
  }

}
