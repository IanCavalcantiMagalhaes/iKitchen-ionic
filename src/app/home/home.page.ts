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
import { ImagemService } from '../services/imagem.service';
import { AdMobService } from '../services/ad-mob.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

//https://ionicframework.com/docs/native/network-interface

export class HomePage {
  msg:string;
  db;
  constructor(public navCtrl: NavController,private router: Router,
    //private networkInterface: NetworkInterface
    private usuarioService:UsuarioService,
    private admobFree: AdMobFree,
    private toastCtrl:ToastService,
    private googlePlus: GooglePlus,
    public loadingController: LoadingController,
    private platform: Platform,
    public alertController: AlertController,
    private FirebaseStore:ImagemService,
    private AdMob:AdMobService,
    ) {
      
    }
    X:boolean;
    public v;
    conjuntoDeImagens=[];
    async ListarImagens(){
      var db=firebase.database();
      db.ref('produto').child('-LgS2CRgw8uvREjOfR4t')
      .child('dados').child('imagens').once('value').then(snapshot => {
        snapshot.forEach(produto => {
          this.CarregarImagem('-LgS2CRgw8uvREjOfR4t',produto.val().nome);
          
          //this.conjuntoDeImagens.push(this.CarregarImagem('-LgBXA7jxkpxmRcvQyuU',produto.val().nome));
          //Pega cada pessoa por vez
        });
      });
      console.log(this.conjuntoDeImagens);
        
      
    }
    CarregarImagem(id,NomeDaImagem){
    
      var storage = firebase.storage();
      var Reference = storage.refFromURL('gs://project-f72e3.appspot.com');
      var img;
      //console.log(await this.FirebaseStore.LoadImage());
      Reference.child(id).child(NomeDaImagem)
        .getDownloadURL().then(url=> {
        
        // Or insert  ed into an <img> element:
        img = document.getElementById('myimg');
        img = url;
        this.conjuntoDeImagens.push(url);
        //console.log(url);
      }).catch(function(error) {
        // Handle any errors
        this.toastCtrl.Mensagem(error);
      });
      
    }
  async ngOnInit(){

    this.ListarImagens();

    this.toastCtrl.Mensagem("OI");
    let db = firebase.database();
    //this.Carregar();
    this.AdMob.AtivarBanner();

    
    var data=[];
    db.ref('test').set({nome:"AA",validade:""});
    firebase.auth().signInWithEmailAndPassword("email@gmail.com", "password").then(user=>{


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
  
 async Carregar(){//https://firebase.google.com/docs/storage/web/download-files


  var storage = firebase.storage();
  var Reference = storage.refFromURL('gs://project-f72e3.appspot.com')
  //console.log(await this.FirebaseStore.LoadImage());
  Reference.child('image/photo.jpg')
    .getDownloadURL().then(url=> {
    
    // Or inserted into an <img> element:
    this.v = document.getElementById('myimg');
    this.v = url;
  }).catch(function(error) {
    // Handle any errors
  });
 }

	async doGoogleLogin(){
    //https://ionicthemes.com/tutorials/about/ionic-google-login
    /*const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);
  
    this.googlePlus.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': 'webClientId.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    });*/
 }
	async presentLoading(loading) {
		return await loading.present();
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
  LoginDeAdministrador(){
    console.log("AAA");
    this.router.navigate(['/loginAdmintrador']);
  }
  
}