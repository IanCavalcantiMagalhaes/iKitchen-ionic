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
  laranja={TelaDeFundo:"orange",CorDoIcone:"white"};
  branco={TelaDeFundo:"white",CorDoIcone:"orange"};
  constructor(private element:ElementRef,
    private render:Renderer,
    private Serv:ServService,
    private menuCtrl:MenuController) { }

  ngOnInit() {
    this.pessoalSelecionado=this.laranja;
    this.pagamentoSelecionado=this.branco;
    this.entregaSelecionado=this.branco;
    this.SomenteLer=true;
    this.TextoEdicao="Editar";
  }
  public SomenteLer:boolean;TextoEdicao:String;
  entregaSelecionado;
  pagamentoSelecionado;
  pessoalSelecionado;

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
    this.pessoalSelecionado=this.laranja;
    this.pagamentoSelecionado=this.branco;
    this.entregaSelecionado=this.branco;
  }

  PagamentoSelecionado(){
    this.pessoalSelecionado=this.branco;
    this.pagamentoSelecionado=this.laranja;
    this.entregaSelecionado=this.branco;
  }
  EntregaSelecionado(){
    this.pessoalSelecionado=this.branco;
    this.pagamentoSelecionado=this.branco;
    this.entregaSelecionado=this.laranja;
  }

 
}
