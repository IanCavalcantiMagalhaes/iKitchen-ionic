import { Injectable } from '@angular/core';
import { NavController, MenuController, AlertController, ModalController } from '@ionic/angular';
import { IfStmt } from '@angular/compiler';
import { ToastService } from '../toast.service';

@Injectable({
  providedIn: 'root'
})
export class MascaraService {
//https://forum.ionicframework.com/t/cpf-cnpj-input-mask/109595
  
  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=",";
  pureResult: any;
  public maskedId: any;
  val: any;
  v: any;

constructor(
  public modalCtrl: ModalController, 
  private alertCtrl: AlertController,
  private menu: MenuController,
  public navCtrl: NavController,
  private t:ToastService, 
  ){} 

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewWillLeave(){
    this.menu.swipeEnable(true);
  }

  public format(valString,formato) {
    //this.t.Mensagem(valString);
    if (!valString) {
        return '';
    }
    
    let val = valString.toString();
    const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
    this.pureResult = parts;
    if(formato=="cpf"){
      this.maskedId = this.cpf_mask(parts[0]);
      return this.maskedId;
    }if(formato=="cep"){
      //this.t.Mensagem("AAA");
      this.maskedId = this.cep_mask(parts[0]);
      return this.maskedId;
    }
    /*if(parts[0].length <= 11){
      this.maskedId = this.cpf_mask(parts[0]);
      return this.maskedId;
    }else{
      this.maskedId = this.cnpj(parts[0]);
      return this.maskedId;
    }*/
};

unFormat(val) {
    if (!val) {
        return '';
    }
    val = val.replace(/\D/g, '');

    if (this.GROUP_SEPARATOR === ',') {
        return val.replace(/,/g, '');
    } else {
        return val.replace(/\./g, '');
    }
};

 cpf_mask(v) {
    v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
    v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto dígitos
    //de novo (para o segundo bloco de números)
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
}
  cep_mask(v){
    v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
    v = v.replace(/(\d{5})(\d{1,3})$/, '$1-$2'); //Coloca um hífen entre o terceiro e o quarto dígitos
    return v;
  }

 cnpj(v) {
    v = v.replace(/\D/g, ''); //Remove tudo o que não é dígito
    v = v.replace(/^(\d{2})(\d)/, '$1.$2'); //Coloca ponto entre o segundo e o terceiro dígitos
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3'); //Coloca ponto entre o quinto e o sexto dígitos
    v = v.replace(/\.(\d{3})(\d)/, '.$1/$2'); //Coloca uma barra entre o oitavo e o nono dígitos
    v = v.replace(/(\d{4})(\d)/, '$1-$2'); //Coloca um hífen depois do bloco de quatro dígitos
    return v;
}

}
