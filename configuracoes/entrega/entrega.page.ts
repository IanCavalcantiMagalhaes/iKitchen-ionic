import { Component, OnInit } from '@angular/core';
import { MascaraService } from '../../services/mascara.service';
import { UsuarioService } from '../../services/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.page.html',
  styleUrls: ['./entrega.page.scss'],
})
export class EntregaPage implements OnInit {

  formulario:FormGroup;
  formulario2:FormGroup;
  constructor(private mascara:MascaraService,
    private usuario:UsuarioService,
    private formBuilder:FormBuilder,
    private toastCtrl:ToastController,
    //private storage:Storage
    ) { }
  ListaCep;
  LocalizacaoSelecionado;
  userId;
  LocalId;
  DadosCEP;
  Edicao:boolean;
  cepNovo:string='';
  numeroResidencialNovo;
  async ngOnInit() {
    this.Edicao=false;
    //this.toastEntrega("AAAA");
    var id;
      /*await this.storage.get('id').then((value) => {
        id=Number(value);
        console.log(value);
      });*/
    this.userId=1;
    this.usuario.AddCepOfUser(1,
      "55555555",
      "11");
    
    //this.ListaCep=[];
    //this.ListaCep=[{cep:"AAA",residencia:"AAA"}];
    this.ListaCep=[await this.usuario.getCEPByUserId(1)];
    //this.toastEntrega(this.ListaCep[0].cep);
    this.formulario = this.formBuilder.group({
      cepNovo:['', [Validators.required]],
      numeroResidencialNovo:['', [Validators.required, Validators.minLength(6)]]
    });
    
  }
  mask(v){
    //this.toastEntrega("V "+v);
    return this.mascara.format(v,'cep');
  }
  cepNovoColor="";
  async InserirDadosDeEntregaNovos(){//Insert
    let quantidade=await this.usuario.QuantidadeDeCepsCadastrados(this.userId);
    let inexistente:boolean=await this.usuario.LocalizacaoAindaNaoExistente(this.cepNovo,this.numeroResidencialNovo);
    this.FormatoCepConsitente();
    quantidade=1;
    inexistente=true;
    //this.toastEntrega(this.CepInvalido);
    if(this.CepInvalido){
      this.cepNovoColor="rgb(255, 153, 153)";
      this.toastEntrega("CEP tem que ter 8 caracteres");
    }else if(quantidade>4){
      this.cepNovoColor="rgb(255, 153, 153)";
      this.toastEntrega("Limite de quantidade de ceps atingido");

    }else if(!inexistente){
      this.cepNovoColor="rgb(255, 153, 153)";
      this.toastEntrega("Cep ja existente na sua conta");

    }else{
      this.cepNovoColor="";
      /*this.usuario.AddCepOfUser(
        this.userId,
        this.formulario.get('cepNovo').value,
        this.formulario.get('numeroResidencialNovo').value);*/
        this.toastEntrega("Adicionado com sucesso");
    }
    
  }
  CepInvalido;//variavel vai para directive
  FormatoCepConsitente(){
    let cep=this.cepNovo.split("");
    if(cep.length<8){
      this.CepInvalido=true;
    }else{
      this.CepInvalido=false;
    }
  }
  CepSelecionado(){//update
    this.DadosCEP=[];
    this.Edicao=true;
    //this.DadosCEP=this.usuario.DadosDeEntrega(this.LocalizacaoSelecionado);
    this.LocalId=this.DadosCEP[0].id;


  }
  UpdateCEP(){//update
    /*this.usuario.UpdateCEP(this.LocalId,
      this.userId,
      this.formulario.get('cepAtualizado').value,
      this.formulario.get('numeroResidencialAtualizado').value)*/
  }
  DeleteCEP(){

  }
  async toastEntrega(Text){
    let toast = await this.toastCtrl.create({
      message: Text,
      duration: 2500,
      showCloseButton: true,
      closeButtonText: "Fechar",
      position:'top'
  });
 
  toast.present();
  }

}
