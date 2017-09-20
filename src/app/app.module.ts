import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddChildPage} from '../pages/add-child/add-child';
import { ChildDetailPage} from '../pages/child-detail/child-detail';
import { DataProvider } from '../providers/data/data';

import { NavProxyService } from '../services/NavProxy.service';
import {PlaceholderPage} from "../pages/placeholder/placeholder";
import {DeletePage} from "../pages/delete/delete";
import {AttributesSettingsPage} from "../pages/attributes-settings/attributes-settings";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
		AddChildPage,
    ChildDetailPage,
    AttributesSettingsPage,
    PlaceholderPage,
    DeletePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
		AddChildPage,
    ChildDetailPage,
    PlaceholderPage,
    AttributesSettingsPage,
    DeletePage
  ],
  providers: [
    NavProxyService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
