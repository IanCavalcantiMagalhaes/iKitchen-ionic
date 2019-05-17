import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { Routes } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  constructor(private element:ElementRef,private render:Renderer,serv:ServService) { }
  TabSelecionada;
  public cartaoSelecionado:boolean;
  public boletoSelecionado:boolean;
  ngOnInit() {
    //console.log("OLA");
  }

    CartaoSelecionado(){
      
      this.cartaoSelecionado=true;
      this.boletoSelecionado=false; 

    }
    BoletoSelecionado(){
      this.cartaoSelecionado=false;
      this.boletoSelecionado=true; 
    }
}
