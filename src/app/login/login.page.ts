import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, NumericValueAccessor, ToastController, MenuController } from '@ionic/angular';
import { AutenticacaoGuard } from '../guard/autenticacao.guard';
import { UsuarioService } from '../services/usuario.service';
import { Storage } from '@ionic/storage';
import { ServService } from '../serv.service';
import * as firebase from 'firebase';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  msg;
  formulario: FormGroup;
 

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private storage:Storage,
    private serv:ServService,
    private usuarioService:UsuarioService,
    private toastCtrl:ToastService,
    private menuCtrl:MenuController) { }

    list;
  async ngOnInit() {
    
    this.formulario = this.formBuilder.group({
      email:['', [Validators.email, Validators.required]],
      senha:['', [Validators.required, Validators.minLength(6)]]
    });
  }  
  ionViewWillEnter() {
    this.menuCtrl.enable(false,"first");
  }
  
  IdLogado;
  logou:boolean;
  data;
  public X:string;
  async clicou(){
    firebase.auth().signInWithEmailAndPassword(
      this.formulario.get('email').value,this.formulario.get('senha').value).then(user =>{
        this.toastCtrl.Mensagem("Logado com sucesso");
        this.menuCtrl.enable(true,"first");
        this.router.navigateByUrl('configuracoes/pessoal');
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode+" : "+errorMessage);
        this.toastCtrl.Mensagem(errorCode+" : "+errorMessage);
        // ...
    });
    /*firebase.auth().onAuthStateChanged(function(user) {//https://firebase.google.com/docs/auth/web/manage-users?hl=pt-br
      if (user) {
        this.toastCtrl.Mensagem("Logado com sucesso");
        this.router.navigateByUrl('configuracoes/pessoal');
      }
    });*/
  }
 /*async clicou() {
      this.IdLogado=this.formulario.get('senha').value;
      this.logou=await this.usuarioService.logar(
        this.formulario.get('email').value,
        this.formulario.get('senha').value);
        
        //this.logou=true;
    if (//this.formulario.valid &&
       this.logou) {
        
          AutenticacaoGuard.Acesso = true;
          
          this.IdLogado= await this.usuarioService.getUserId(
            this.formulario.get('email').value);

          //this.IdLogado=this.TratarJSON(this.IdLogado);
          let val=Object.values(this.IdLogado);//"id:1" para "1"
          this.IdLogado=val[0];
          this.storage.set('id',this.IdLogado);

          this.toastLogin("usuario de id "+this.IdLogado
          +" logado com sucesso");
          this.menuCtrl.enable(true,"first");
          this.router.navigateByUrl('configuracoes/pessoal');
    } else  {
      this.toastLogin("Email ou senha incorreta");
    }
      
       
  }
  TratarJSON(json){//https://alligator.io/js/json-parse-stringify/

    var valor,partes=[];
    valor=JSON.stringify(json);
    partes=valor.split(":",2);
    valor=partes[1].replace("}","");
    return valor;
  }
 async toastLogin(Text){//https://forum.ionicframework.com/t/how-to-add-toast-action-button/61377/3
  let toast = await this.toastCtrl.create({
      message: Text,
      duration: 2500,
      showCloseButton: true,
      closeButtonText: "Fechar"
  });
 
  toast.present();
  }*/

}