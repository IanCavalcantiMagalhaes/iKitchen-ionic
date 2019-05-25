import { Component, OnInit } from '@angular/core';
import { NavController, Platform, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
//import { NetworkInterface } from '@ionic-native/network-interface/ngx';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import * as firebase from 'firebase';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

//https://ionicframework.com/docs/native/network-interface

export class HomePage {
  msg:string;
  constructor(public navCtrl: NavController,private router: Router,
    //private networkInterface: NetworkInterface
    private usuarioService:UsuarioService,
    private sqlite: SQLite,
    private admobFree: AdMobFree,
    private toastCtrl:ToastService,
    private googlePlus: GooglePlus,
    public loadingController: LoadingController,
    private platform: Platform,
    public alertController: AlertController
    ) {
    }
    X:boolean;
    v;
  async ngOnInit(){
    
    this.admobFree.banner.config({
      id: 'ca-app-pub-8487437273346534/1477069444',
      isTesting:true, //Está em ambiente de teste
      autoShow: true
      });
      this.admobFree.banner.prepare(); //Executa o banner

    let db = firebase.database();
    var data=[];
    
    firebase.auth().signInWithEmailAndPassword("email@gmail.com", "password").then(user=>{

      console.log(firebase.auth().currentUser.email);

    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    });
    //console.log(firebase.auth().currentUser.displayName);
    //this.usuarioService.delete("aaa");
    //this.usuarioService.delete("Ian");
   /* this.msg="";
    this.networkInterface.getWiFiIPAddress()
    .then(address => console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))
    .catch(error => console.error(`Unable to get IP: ${error}`));*/
  }
  
 
  googlePlusLogin() {
  var a;  
  this.googlePlus.login({
      

    })
  .then(res => this.toastCtrl.Mensagem(res))
  .catch(err => this.toastCtrl.Mensagem(err)
  );
  }     

  async Clicou(){
    
    
    this.usuarioService.CadastrarDadosBasicosDeUsuario("aaa","123","1234567890");
    this.X=false;
    
    let logou = await this.usuarioService.logar("aaa","123");
    this.X=logou;
    
  }
  IrParaLogin(){
    this.router.navigate(['/login']);
  }
  IrParaCadastro(){
    
    this.router.navigate(['/criarconta']);
    //this.navCtrl.back();
  }
  
}