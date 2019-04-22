import { Directive, Input, OnInit, OnChanges, Renderer, ElementRef } from '@angular/core';
import { BoletoPage } from '../boleto/boleto.page';
import { ServService } from '../../serv.service';

@Directive({
  selector: '[appDirCartao]'
})
export class DirCartaoDirective implements OnChanges{

  @Input('appDirCartao')
  Selecionado:boolean;

  X:boolean;
  constructor(private element:ElementRef,private render:Renderer,
    private serv:ServService) { }
    boleto:Renderer;
  ngOnInit():any{
    console.log("OLA");
    this.X=true;
  }
  ngOnChanges(){
    
    if(this.Selecionado){
      console.log("Dir:"+this.X);
      this.render.setElementStyle(
        this.element.nativeElement,'background-color','orange');
      this.render.setElementStyle(
        this.element.nativeElement,'color','white');


       
    }else{
      this.render.setElementStyle(
        this.element.nativeElement,'background-color','white');
      this.render.setElementStyle(
        this.element.nativeElement,'color','gray');
    }
    
  }
 
  
}
