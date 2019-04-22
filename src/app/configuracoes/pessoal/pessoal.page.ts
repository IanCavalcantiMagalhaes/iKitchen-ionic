import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { ServService } from '../../serv.service';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { UsuarioService } from '../../services/usuario.service';

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
    private toastCtrl:ToastController
    ) { }

  public SomenteLer:boolean;TextoEdicao:String;
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
      cpf:['', [Validators.required]]
    });
    this.SomenteLer=true;
    
    this.mostrarBotao=false;
  }

  ngOnChange(){
    this.SomenteLer=this.Serv.getSomenteLer();
  }

  async botaoAlterar(){
    //var x= this.formulario.get('email').value;
    //this.toastPessoal(x+" "+this.userId);
    
    this.usuarioService.updateUser(
      this.userId,
      this.formulario.get('email').value,
      this.formulario.get('cpf').value);
      
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
    this.Serv.setSomenteLer(true);
    this.SomenteLer=true;
    this.mostrarBotao=false;
    this.ListarValores()
    //location.reload;
    //this.router.navigateByUrl('configuracoes/pessoal');
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
  
  

}
