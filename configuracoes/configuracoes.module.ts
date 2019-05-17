import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ConfiguracoesPage } from './configuracoes.page';
import { DirPessoalDirective } from './dirConfiguracoes/dir-pessoal.directive';
import { DirPagamentoDirective } from './dirConfiguracoes/dir-pagamento.directive';
import { DirEntregaDirective } from './dirConfiguracoes/dir-entrega.directive';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracoesPage,
    children: [
      { path: '', redirectTo: './pessoal/pessoal.module#PessoalPageModule', pathMatch: 'full' },
      //{ path: 'editar-Pagamento', loadChildren: './editar-Pagamento/editar-pagamento.module#editar-PagamentoPageModule' },
      { path: 'pessoal', loadChildren: './pessoal/pessoal.module#PessoalPageModule' },
      { path: 'entrega', loadChildren: './entrega/entrega.module#EntregaPageModule' }
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
  
  declarations: [ConfiguracoesPage, DirPessoalDirective, DirPagamentoDirective, DirEntregaDirective]
})
export class ConfiguracoesPageModule {

}
