import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { PessoalPage } from './pessoal/pessoal.page';
import { ServService } from '../serv.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {
  BarraPesquisa=false;
  constructor(private element:ElementRef,
    private render:Renderer,
    private Serv:ServService,
    private menuCtrl:MenuController) { }

  ngOnInit() {
    this.pessoalSelecionado=true;
    this.SomenteLer=true;
    this.TextoEdicao="Editar";
  }
  public SomenteLer:boolean;TextoEdicao:String;
  entregaSelecionado:boolean;
  pagamentoSelecionado:boolean;
  pessoalSelecionado:boolean;

  ionViewWillEnter() {
    this.menuCtrl.enable(true,"first");
  }
  BotaoEdicao(){
    if(this.SomenteLer){
      this.HabilitarEdicao();
    }else{
      this.DesabilitarEdicao();
    }
  }
  HabilitarEdicao(){
    this.TextoEdicao="Cancelar";
    this.SomenteLer=false;
    this.Serv.setSomenteLer(false);
    //this.pessoal.SomenteLer=false;
  }
  DesabilitarEdicao(){
    this.TextoEdicao="Editar";
    this.Serv.setSomenteLer(true);
    //this.pessoal.SomenteLer=false;
  }
  PessoalSelecionado(){
    this.pessoalSelecionado=true;
    this.pagamentoSelecionado=false;
    this.entregaSelecionado=false;
  }

  PagamentoSelecionado(){
    this.pessoalSelecionado=false;
    this.pagamentoSelecionado=true;
    this.entregaSelecionado=false;
  }
  EntregaSelecionado(){
    this.pessoalSelecionado=false;
    this.pagamentoSelecionado=false;
    this.entregaSelecionado=true;
  }

 
}
