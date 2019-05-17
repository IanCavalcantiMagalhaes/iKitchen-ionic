import { Directive, Input, Renderer, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appDirPessoal]'
})
export class DirPessoalDirective implements OnChanges{

  constructor(private element:ElementRef,private render:Renderer) { }
  @Input('appDirPessoal')
  Selecionado:boolean;

  ngOnChanges(){
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
