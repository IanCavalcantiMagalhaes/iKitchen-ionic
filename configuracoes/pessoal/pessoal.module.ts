import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrMaskerModule } from 'br-mask';
import { PessoalPage } from './pessoal.page';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ServicesModule } from '../../services/services.module';

const routes: Routes = [
  {
    path: '',
    component: PessoalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ServicesModule,
    BrMaskerModule
  ],
  declarations: [PessoalPage]
})
export class PessoalPageModule {}
