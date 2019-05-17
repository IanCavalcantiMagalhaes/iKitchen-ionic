import { Component, OnInit, Renderer, ElementRef } from '@angular/core';
import { ServService } from '../../serv.service';

@Component({
  selector: 'app-boleto',
  templateUrl: './boleto.page.html',
  styleUrls: ['./boleto.page.scss'],
})
export class BoletoPage implements OnInit {

  constructor(private render:Renderer,private element:ElementRef,private serv:ServService) { }

  ngOnInit() {
  }
 
}
