import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastCtrl:ToastController) { }

  public async Mensagem(Text){https://forum.ionicframework.com/t/can-i-position-toast-other-than-top-middle-and-bottom/91575/2
    let toast = await this.toastCtrl.create({
      message: Text,
      duration: 5000,
      showCloseButton: true,
      closeButtonText: "Fechar",
      position:"bottom",
      cssClass:"toastAfterHeader"
    });
    toast.present();
  }
}
