import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BrMaskerModule } from 'br-mask';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
      IonicStorageModule.forRoot(),
      HttpClientModule,
      BrMaskerModule,
      AngularFireModule.initializeApp({
        apiKey: "SEU API KEY",
        authDomain: "SEU AUTH DOMAIN",
        databaseURL: "SUA DATABASE URL",
        projectId: "SEU PROJECT ID",
        storageBucket: "SEU STORAGE BUCKET",
        messagingSenderId: "SEU MESSAGING SENDER ID"
      }),
      AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}