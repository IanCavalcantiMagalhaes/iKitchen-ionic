import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'criarconta', loadChildren: './criarconta/criarconta.module#CriarcontaPageModule' },
  { path: 'lista', loadChildren: './lista/lista.module#ListaPageModule' },
  { path: 'pagamento', loadChildren: './pagamento/pagamento.module#PagamentoPageModule' },
  { path: 'cartao', loadChildren: './pagamento/cartao/cartao.module#CartaoPageModule' },
  { path: 'boleto', loadChildren: './pagamento/boleto/boleto.module#BoletoPageModule' },
  { path: 'configuracoes', loadChildren: './configuracoes/configuracoes.module#ConfiguracoesPageModule' },
  { path: 'pessoal', loadChildren: './configuracoes/pessoal/pessoal.module#PessoalPageModule' },
  { path: 'entrega', loadChildren: './configuracoes/entrega/entrega.module#EntregaPageModule' },
  { path: 'edit-pagamento', loadChildren: './configuracoes/edit-pagamento/edit-pagamento.module#EditPagamentoPageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'principal', loadChildren: './produto/principal/principal.module#PrincipalPageModule' },
  { path: 'loginAdmintrador', loadChildren: './administrador/login-admintrador/login-admintrador.module#LoginAdmintradorPageModule' },
  { path: 'adicionarProduto', loadChildren: './administrador/adicionar-produto/adicionar-produto.module#AdicionarProdutoPageModule' }

  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
