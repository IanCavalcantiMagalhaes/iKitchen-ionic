import { Component, OnInit } from '@angular/core';
import { ServService } from '../../serv.service';
import { UsuarioService } from '../../services/usuario.service';
import { ToastService } from '../../toast.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login-admintrador',
  templateUrl: './login-admintrador.page.html',
  styleUrls: ['./login-admintrador.page.scss'],
})
export class LoginAdmintradorPage implements OnInit {

  constructor(
    private router:Router,
    private serv:ServService,
    public toastCtrl:ToastService,
    private menuCtrl:MenuController) { }
    email="";senha="";
  ngOnInit() {
    
  }
  login(){
    console.log(this.senha);
    firebase.auth().signInWithEmailAndPassword(
      this.email,this.senha).then(user =>{
        this.toastCtrl.Mensagem("Logado com sucesso");
        this.menuCtrl.enable(false,"first");
        this.menuCtrl.enable(true,"second");
        this.router.navigateByUrl('adicionarProduto');
      }).catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        this.toastCtrl.Mensagem(errorCode+" : "+errorMessage);
        console.log(errorCode+" : "+errorMessage);
        // ...
    });
  }

}
