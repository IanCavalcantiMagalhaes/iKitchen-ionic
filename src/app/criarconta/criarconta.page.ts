import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, NumericValueAccessor, ToastController } from '@ionic/angular';
import { AutenticacaoGuard } from '../guard/autenticacao.guard';
import { UsuarioService } from '../services/usuario.service';
import { Storage } from '@ionic/storage';
import { ServService } from '../serv.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-criarconta',
  templateUrl: './criarconta.page.html',
  styleUrls: ['./criarconta.page.scss'],
})
export class CriarcontaPage implements OnInit {

  formulario: FormGroup;
  db;
  constructor(private formBuilder:FormBuilder,
    private usuarioService:UsuarioService,
    private storage:Storage,
    private navCtrl: NavController,
    private router:Router,
    private toastCtrl:ToastController) { 
      this.db = firebase.database();
    }
    id;
  async ngOnInit() {
    this.formulario = this.formBuilder.group({
      email:['', [Validators.email, Validators.required]],
      senha:['', [Validators.required, Validators.minLength(6)]]
    });
  }
  Cadastrar(){
    let uid=this.db.ref('produto').push().key;
    firebase.auth().createUserWithEmailAndPassword(
      this.formulario.get('email').value,this.formulario.get('senha').value
        ).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          this.toastCtrl.Mensagem(errorCode+" : "+errorMessage);
          // ...
      });
    this.db.ref('usuario').child(uid).set(
      {
        uid:uid,
        email:this.formulario.get('email').value,
        senha:this.formulario.get('senha').value
      });
  }
 /* async clicou(){
    let aceitar=await this.verificarSeEmailExistente(this.formulario.get('email').value);
    this.id=Object.values(await this.usuarioService.UltimoIdInserido());
    if(aceitar){
      this.usuarioService.CadastrarDadosBasicosDeUsuario(
        this.formulario.get('email').value,
        this.formulario.get('senha').value,
        "");
        
      this.storage.set('id',Object.values(await this.usuarioService.UltimoIdInserido()));
      this.id=Object.values(await this.usuarioService.UltimoIdInserido());
      this.toastCriar("Cadastrado com sucesso","green");
      this.router.navigateByUrl('configuracoes/pessoal');
    }else{
      this.toastCriar("esta conta de e-mail já esta cadastrada","red");
    }
  }

  async verificarSeEmailExistente(Email:string){
    var valido=true;
    let dados=await this.usuarioService.listar();
    for(let i=0;i<dados.length;i++){
      if(dados[i].email==Email){
        valido=false;
      }
    }
      return valido

  }
  async toastCriar(Text,cor:string){//https://forum.ionicframework.com/t/how-to-add-toast-action-button/61377/3
    let toast = await this.toastCtrl.create({
        message: Text,
        duration: 2500,
        showCloseButton: true,
        closeButtonText: "Fechar",
    });
   
    toast.present();
    }*/
}
