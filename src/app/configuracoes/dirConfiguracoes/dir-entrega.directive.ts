import { Directive, Input, ElementRef, Renderer, OnChanges } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appDirEntrega]'
})
export class DirEntregaDirective implements OnChanges{

  constructor(private element:ElementRef,private render:Renderer) { }
  @Input('appDirEntrega')
  Selecionado:boolean;

  ngOnChanges(){
    console.log("AA");
    if(this.Selecionado){
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
