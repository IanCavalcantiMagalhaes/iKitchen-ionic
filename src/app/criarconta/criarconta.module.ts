import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CriarcontaPage } from './criarconta.page';
import { ServicesModule } from '../services/services.module';

const routes: Routes = [
  {
    path: '',
    component: CriarcontaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Storage,
    ServicesModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [CriarcontaPage]
})
export class CriarcontaPageModule {}
