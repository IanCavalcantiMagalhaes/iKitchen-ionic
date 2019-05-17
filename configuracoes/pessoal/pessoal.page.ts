import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { ServService } from '../../serv.service';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { UsuarioService } from '../../services/usuario.service';
import { MascaraService } from '../../services/mascara.service';

@Component({
  selector: 'app-pessoal',
  templateUrl: './pessoal.page.html',
  styleUrls: ['./pessoal.page.scss'],
})
export class PessoalPage implements OnInit {

  formulario: FormGroup;
  
  
  constructor(private formBuilder:FormBuilder,private Serv:ServService,
    private router: Router,private storage:Storage,
    private serv:ServService,
    private usuarioService:UsuarioService,
    private mascara:MascaraService,
    private toastCtrl:ToastController
    ) { }

  public SomenteLer:boolean;
  TextoEdicao;
  mostrarBotao:boolean;
  userData;
  public userId;
  X;

    async ListarValores(){
      var id;
        await this.storage.get('id').then((value) => {
          id=Number(value);
          console.log(value);
        });
        this.userId=id;
        this.TextoEdicao="Editar "+id;
        this.userData=[];
        this.userData=[await this.usuarioService.getUserById(id)];
        //this.userData=[{email:"Ian",cpf:"999.999.999-99"}];//Teste sem banco
        
    }
  async ngOnInit() {
    this.ListarValores();
    this.formulario = this.formBuilder.group({
      email:['', [Validators.email, Validators.required]],
      cpf_cnpj:['', [Validators.required]]
    });
    this.SomenteLer=true;
    
    this.mostrarBotao=false;
  }
  mask(v){
    //this.toastPessoal(v);
    return this.mascara.format(v,'cpf');
  }

  ngOnChange(){
    this.SomenteLer=this.Serv.getSomenteLer();
  }

  async botaoAlterar(){
    //this.CPFVelhoOuNovo();
    
    this.usuarioService.updateUser(
      this.userId,
      this.formulario.get('email').value,
      this.formulario.get('cpf_cnpj').value,"123");
    this.toastPessoal("Alterado com sucesso");
    
      
      this.DesabilitarEdicao();
      
      
  }
  botaoApagar(){

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
    this.SomenteLer=false;
    this.mostrarBotao=true;
  }
  DesabilitarEdicao(){
    this.TextoEdicao="Editar";
    this.SomenteLer=true;
    this.mostrarBotao=false;
    //location.reload;
    this.router.navigateByUrl('configuracoes/pessoal');
  }
  async toastPessoal(Text){
    let toast = await this.toastCtrl.create({
      message: Text,
      duration: 2500,
      showCloseButton: true,
      closeButtonText: "Fechar"
  });
 
  toast.present();
  }
  CPFVelhoOuNovo(){
    if(this.formulario.get('cpfNovo').value=='' || 
        this.formulario.get('cpfNovo').value.length<14){
      return this.formulario.get('cpfVelho').value;
    }else{
      return this.formulario.get('cpfNovo').value;
    }
  }
  
}
