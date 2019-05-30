import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { ServService } from '../../serv.service';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { UsuarioService } from '../../services/usuario.service';
import { MascaraService } from '../../services/mascara.service';
import * as firebase from 'firebase';
import { ToastService } from 'src/app/toast.service';

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
    private toastCtrl:ToastService
    ) { }

  public SomenteLer:boolean;
  TextoEdicao;
  mostrarBotao:boolean;
  userData;
  public userId;
  X;
  id;
  email:string="";
  cpf_cnpj:string;
  senha:string;

    async ListarValores(){

      let db = firebase.database();
      this.userData=[];
      var id;
      
      firebase.auth().onAuthStateChanged(user=>{
        this.TextoEdicao="Editar";
        db.ref('usuario').child(user.uid).once('value').then(snapshot => {
          snapshot.forEach(userResult => {
            this.userData.push(userResult.val());
            console.log(userResult.val().email); 
          
          //Pega cada pessoa por vez
          })
        });
      });
      //this.TextoEdicao="Editar "+id;

      /*var id;
        await this.storage.get('id').then((value) => {
          id=Number(value);
          console.log(value);
        });
        this.userId=id;
        this.TextoEdicao="Editar "+id;
        this.userData=[];
        this.userData=[await this.usuarioService.getUserById(id)];*/
        //this.userData=[{Email:"Ian",cpf:"999.999.999-99"}];//Teste sem banco
      
    }
  async ngOnInit() {
    
    
    this.formulario = this.formBuilder.group({
      email:['', [Validators.required]],
      cpf_cnpj:['', [Validators.required]],
      senha:['', [Validators.required]]
    });
    this.SomenteLer=true;
    this.ListarValores();
    this.mostrarBotao=false;
  }
  mask(v){
    //this.toastPessoal(v);
    return this.mascara.format(v,'cpf');
  }

  ngOnChange(){
    this.SomenteLer=this.Serv.getSomenteLer();
  }

  botaoAlterar(){
    let db = firebase.database();
    //this.CPFVelhoOuNovo();
    var erros;
    
    var user = firebase.auth().currentUser;
    console.log(this.email);
    //Email
    user.updateEmail(this.email).then(user=>{

      db.ref('usuario')
        .child(firebase.auth().currentUser.uid)
        .child('dados')
          .child('email').set(this.email);
        
    }).catch(error=>{
      erros+=" Email";
    });
    //SENHA
    user.updatePassword(this.formulario.get('senha').value).then(user=>{

    }).catch(error=>{
      erros+=" senha";
    });
    //CPF
    if(this.cpf_cnpj.length==14){
      db.ref('usuario').child(user.uid).child('dados').child('cpf_cnpj').set(
        this.formulario.get('cpf_cnpj').value);
    }else{
      erros+=" cpf";
    }
    if(erros){
      this.toastCtrl.Mensagem("Erros nos seguintes campos: "+erros);
      console.log(erros);
    }else{
      this.toastCtrl.Mensagem("Alterado com sucesso");
    }
    
        
      

      
    /*this.usuarioService.updateUser(
      this.userId,
      this.formulario.get('email').value,
      this.formulario.get('cpf_cnpj').value,"123");*/
    
    
      
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
  
  CPFVelhoOuNovo(){
    if(this.formulario.get('cpfNovo').value=='' || 
        this.formulario.get('cpfNovo').value.length<14){
      return this.formulario.get('cpfVelho').value;
    }else{
      return this.formulario.get('cpfNovo').value;
    }
  }
  
}
