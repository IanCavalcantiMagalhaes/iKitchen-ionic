import { Component } from '@angular/core';

import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu:MenuController,
    private router:Router,
    private navCtrl:NavController,
    private googlePlus: GooglePlus,
    private translate: TranslateService,private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => { 
      this.translate.use(navigator.language);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
       });
    
    console.log(navigator.language);
    

    var firebaseConfig = {
      apiKey: "AIzaSyAcOet68HIQ0mvDE2lhgBEVtouDmNwNLCM",
      authDomain: "project-f72e3.firebaseapp.com",
      databaseURL: "https://project-f72e3.firebaseio.com",
      projectId: "project-f72e3",
      storageBucket: "project-f72e3.appspot.com",
      messagingSenderId: "628949823864",
      appId: "1:628949823864:web:6731a1100f3e9bc6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
  }
  sair(){
    this.menu.enable(false,"first");
    this.menu.enable(false,"second");
    firebase.auth().signOut();
    this.googlePlus.logout();
    this.navCtrl.navigateBack('/home');
    
  }
  IrParaConfiguracoes(){
    console.log("CCC");
    this.menu.close();
    this.navCtrl.navigateRoot('/configuracoes/pessoal');
  }
  IrParaProduto(){
    this.menu.close();
    this.navCtrl.navigateRoot('/lista');
  }
}
