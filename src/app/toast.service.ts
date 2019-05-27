import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastCtrl:ToastController) { }

  public async Mensagem(Text){
    let toast = await this.toastCtrl.create({
      message: Text,
      duration: 2500,
      showCloseButton: true,
      closeButtonText: "Fechar"
    });
    toast.present();
  }
}
