import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdicionarProdutoPage } from './adicionar-produto.page';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';

const routes: Routes = [
  {
    path: '',
    component: AdicionarProdutoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],providers: [
    Crop,File,Camera,PhotoLibrary
  ],
  declarations: [AdicionarProdutoPage]
})
export class AdicionarProdutoPageModule {}
