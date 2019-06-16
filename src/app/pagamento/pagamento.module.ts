import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { PagamentoPage } from './pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentoPage,
    children: [
      { path: '', redirectTo: './cartao/cartao.module#CartaoPageModule', pathMatch: 'full' },
      { path: 'cartao', loadChildren: './cartao/cartao.module#CartaoPageModule' },
      { path: 'boleto', loadChildren: './boleto/boleto.module#BoletoPageModule' },
      ]
  }
];
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PagamentoPage]
})
export class PagamentoPageModule {}
