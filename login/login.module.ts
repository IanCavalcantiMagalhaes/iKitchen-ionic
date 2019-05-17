import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, MenuController } from '@ionic/angular';

import { LoginPage } from './login.page';
import { ServicesModule } from '../services/services.module';
import { BrMaskerModule } from 'brmasker-ionic-3';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    BrMaskerModule,
    
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
