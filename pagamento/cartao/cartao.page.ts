import { Component, OnInit, Renderer } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.page.html',
  styleUrls: ['./cartao.page.scss'],
})
export class CartaoPage implements OnInit {

  constructor(private render:Renderer) { }

  ngOnInit() {
  }

}
