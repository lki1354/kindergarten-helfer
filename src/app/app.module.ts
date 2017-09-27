import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
import { KidsPage } from '../pages/kids/kids';
import { AddChildPage} from '../pages/add-child/add-child';
import { ChildDetailPage} from '../pages/child-detail/child-detail';
import { DataProvider } from '../providers/data/data';

import { NavProxyService } from '../services/NavProxy.service';
import {PlaceholderPage} from "../pages/placeholder/placeholder";
import {DeletePage} from "../pages/delete/delete";
import {AttributesSettingsPage} from "../pages/attributes-settings/attributes-settings";
import { DataSaverProvider } from '../providers/data-saver/data-saver';
import {TabsPage} from "../pages/tabs/tabs";
import {AttributesPage} from "../pages/attributes/attributes";
import {ActivitiesPage} from "../pages/activities/activities";
import {AttributeDetailPage} from "../pages/attribute-detail/attribute-detail";
import {AddAttributePage} from "../pages/add-attribute/add-attribute";
import {ActivitieDetailPage} from "../pages/activitie-detail/activitie-detail";
import {AddActivitiePage} from "../pages/add-activitie/add-activitie";

@NgModule({
  declarations: [
    MyApp,
    KidsPage,
		AddChildPage,
    ChildDetailPage,
    AttributesSettingsPage,
    PlaceholderPage,
    DeletePage,
    TabsPage,
    AttributesPage,
    ActivitiesPage,
    AttributeDetailPage,
    AddAttributePage,
    ActivitieDetailPage,
    AddActivitiePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    KidsPage,
		AddChildPage,
    ChildDetailPage,
    PlaceholderPage,
    AttributesSettingsPage,
    DeletePage,
    TabsPage,
    AttributesPage,
    ActivitiesPage,
    AttributeDetailPage,
    AddAttributePage,
    ActivitieDetailPage,
    AddActivitiePage
  ],
  providers: [
    NavProxyService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    DataSaverProvider,
    File
  ]
})
export class AppModule {}
