import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

//import { NetworkInterface } from '@ionic-native/network-interface/ngx';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import * as firebase from 'firebase';

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
    ) {
    }
    X:boolean;
    v;
  async ngOnInit(){
    
    let db = firebase.database();
    db.ref('nome').set('Carlos');
    console.log("OLA");
    //this.usuarioService.delete("aaa");
    //this.usuarioService.delete("Ian");
   /* this.msg="";
    this.networkInterface.getWiFiIPAddress()
    .then(address => console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))
    .catch(error => console.error(`Unable to get IP: ${error}`));*/
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


  /** Recupera o banco de dados  */
  protected getDB() {
    return this.sqlite.create({
      name: 'aula_banco.db',
      location: 'default'
    });
  }
}