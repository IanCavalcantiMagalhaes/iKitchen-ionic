import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginAdmintradorPage } from './login-admintrador.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAdmintradorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginAdmintradorPage]
})
export class LoginAdmintradorPageModule {}
