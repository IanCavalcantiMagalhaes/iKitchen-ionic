import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServicesModule } from '../services/services.module'
import { HomePage } from './home.page';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
  ,
  providers: [
    GooglePlus
  ]
})
export class HomePageModule {}
