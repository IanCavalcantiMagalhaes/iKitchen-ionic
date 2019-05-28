import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastService } from '../../toast.service';

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.page.html',
  styleUrls: ['./adicionar-produto.page.scss'],
})
export class AdicionarProdutoPage implements OnInit {

  constructor(private toastCtrl:ToastService) { }
  nome;
  descricao;
  preco;
  quant;
  ngOnInit() {
    
  }
  CriarProduto(){
    let db=firebase.database();
    let id=db.ref('produto').push().key;
    db.ref('produto')
        .child(id)
          .child('dados')  
            .set({
                nome:this.nome,
                descricao:"",
                preco:this.preco,
                quantidade:this.quant
            }).then(res => this.toastCtrl.Mensagem("Produto criado com sucesso"))
              .catch(err => this.toastCtrl.Mensagem(err))
    }
}
