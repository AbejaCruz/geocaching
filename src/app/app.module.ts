
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LugarPage } from '../pages/lugar/lugar';
import { TabsPage } from '../pages/tabs/tabs';
import { PerfilPage } from '../pages/perfil/perfil';
import { AboutPage } from '../pages/about/about';
import { TerceraPage } from '../pages/tercera/tercera';
import {LoginPage} from '../pages/login/login';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
import { LugaresService } from '../services/lugares.service';
import {AuthService} from '../services/auth.service';

export const firebaseConfig = {
  apiKey: "AIzaSyBnHCWCJlljHg_lGoPleHf8zshBmyjwvkc",
    authDomain: "geocaching-a9010.firebaseapp.com",
    databaseURL: "https://geocaching-a9010.firebaseio.com",
    projectId: "geocaching-a9010",
    storageBucket: "geocaching-a9010.appspot.com",
    messagingSenderId: "214881546556"
  };
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LugarPage,
    TabsPage,
    PerfilPage,
    AboutPage,
    TerceraPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LugarPage,
    TabsPage,
    PerfilPage,
    AboutPage,
    TerceraPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LugaresService,
    AuthService
  ]
})
export class AppModule {}
