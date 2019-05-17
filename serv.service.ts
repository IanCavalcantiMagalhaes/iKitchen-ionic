import { Injectable, Renderer } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  
  private _somenteLer: boolean;
  public id;
  constructor(public storage:Storage) { }
  getSomenteLer(): boolean {
    return this._somenteLer;
  }

  setSomenteLer(somenteLer:boolean) {
    this._somenteLer = somenteLer;
  }
  

  GuardarId(id:number){
    this.storage.set('id',id);
  }

  
  public PegarId(){
    this.storage.get('id').then((val) => {
      //console.log('Your id is', val);
      this.id=val;
      return this.id;

    });



  }
  
}
