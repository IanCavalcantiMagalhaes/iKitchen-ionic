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
  Edicao;

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
    this.toastEntrega(this.ListaCep[0].cep);
    this.formulario = this.formBuilder.group({
      cepNovo:['', [Validators.email, Validators.required]],
      numeroResidencialNovo:['', [Validators.required, Validators.minLength(6)]]
    });
    
  }
  Mask(v,formato){
    return this.mascara.format(v,formato);
  }
  async InserirDadosDeEntrega(){//Insert
    /*let quantidade=await this.usuario.QuantidadeDeCepsCadastrados(this.userId);
    let inexistente=await this.usuario.LocalizacaoAindaNaoExistente(this.formulario.get('cepNovo').value,
                                                              this.formulario.get('numeroResidencialNovo').value);
    
    if(quantidade<4 || inexistente){
      this.usuario.AddCepOfUser(
        this.userId,
        this.formulario.get('cepNovo').value,
        this.formulario.get('numeroResidencialNovo').value);
        this.toastEntrega("Adicionado com sucesso");
    }else{
      this.toastEntrega("Limite de quantidade de ceps atingido");
    }*/
    
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
      closeButtonText: "Fechar"
  });
 
  toast.present();
  }

}
