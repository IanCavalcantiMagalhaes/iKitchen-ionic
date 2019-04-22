import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor() { }
  public list: string[]=["Utensilios","Estruturas completas"];
  ngOnInit() {

  }

}
