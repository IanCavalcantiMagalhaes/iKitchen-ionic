import { Injectable } from '@angular/core';
import { AdMobFree } from '@ionic-native/admob-free/ngx';

@Injectable({
  providedIn: 'root'
})
export class AdMobService {

  constructor(private admobFree: AdMobFree) { }
  AtivarBanner(){
    this.admobFree.banner.config({
      id: 'ca-app-pub-8487437273346534/1477069444',
      isTesting:true, //Está em ambiente de teste
      autoShow: true
      });
      this.admobFree.banner.prepare(); //Executa o banner
  }
}
