import { Directive, Input, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appDirPagamento]'
})
export class DirPagamentoDirective {

  constructor(private element:ElementRef,private render:Renderer) { }

  @Input('appDirPagamento')
  Selecionado:boolean;

  ngOnchanges(){
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
