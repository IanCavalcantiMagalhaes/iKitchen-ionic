import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  BarraPesquisa=true;
  constructor(private route:Router,
    private activatedRoute:ActivatedRoute,
    private usuario:UsuarioService) {
   }
  CampoPesquisa;
  Dados;
  Nome;
  ngOnInit() {
  }
  async pesquisar(){
    this.Dados=[];
   // this.Dados=await this.usuario.ProcurarProduto(this.Nome);
  }

}
