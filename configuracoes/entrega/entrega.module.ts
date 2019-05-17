import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntregaPage } from './entrega.page';
import { ServicesModule } from '../../services/services.module';
import { BrMaskerModule } from 'brmasker-ionic-3';

const routes: Routes = [
  {
    path: '',
    component: EntregaPage
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
  declarations: [EntregaPage]
})
export class EntregaPageModule {}
