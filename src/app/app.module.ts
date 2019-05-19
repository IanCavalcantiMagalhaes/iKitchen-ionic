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
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateLoader} from '@ngx-translate/core';
import { AdMobFree } from '@ionic-native/admob-free/ngx';

export function HttpLoaderFactory(http: HttpClient) {
   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
      IonicStorageModule.forRoot(),
      HttpClientModule,
      BrMaskerModule,
     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
            }
     }),
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
    AdMobFree,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}