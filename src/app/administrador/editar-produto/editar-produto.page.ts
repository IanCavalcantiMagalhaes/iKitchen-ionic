import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.page.html',
  styleUrls: ['./editar-produto.page.scss'],
})
export class EditarProdutoPage implements OnInit {

  constructor(private platform:Platform) { }
  idProduto;
  conjuntoDeImagens=[];
  ngOnInit() {
    this.idProduto = this.platform.getQueryParam("id");
  }
  ListarDadosDeProduto(){
    var str=firebase.storage();
    var Reference = str.refFromURL('gs://project-f72e3.appspot.com');
    var imagens=[Reference.child(this.idProduto)];
    for(var i=0;i<imagens.length;i++){

    }
  }
  async ListarImagens(){
    var db=firebase.database();
    db.ref('produto').child(this.idProduto)
    .child('dados').child('imagens').once('value').then(snapshot => {
      snapshot.forEach(produto => {
        this.CarregarImagem(this.idProduto,produto.val().nome);
        //Pega cada pessoa por vez
      });
    });
  }
  CarregarImagem(id,NomeDaImagem){
    
    var storage = firebase.storage();
    var Reference = storage.refFromURL('gs://project-f72e3.appspot.com');
    var img;
    //console.log(await this.FirebaseStore.LoadImage());
    Reference.child(id).child(NomeDaImagem)
      .getDownloadURL().then(url=> {
      
      // Or insert  ed into an <img> element:
      img = document.getElementById('myimg');
      img = url;
      this.conjuntoDeImagens.push(url);
      //console.log(url);
    }).catch(function(error) {
      // Handle any errors
      this.toastCtrl.Mensagem(error);
    });
    
  }

}
