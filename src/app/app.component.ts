import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AttributesSettingsPage } from '../pages/attributes-settings/attributes-settings'
import { NavProxyService} from '../services/NavProxy.service'
import {PlaceholderPage} from "../pages/placeholder/placeholder";
import {DeletePage} from "../pages/delete/delete";
import {_MasterPage} from "../pages/_MasterPage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild('detailNav') detailNav: Nav;
    @ViewChild('masterNav') masterNav: Nav;

  masterPage:any = null;
  detailPage:any = null;


  pages: Array<{title: string, component: _MasterPage, arg: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private navProxy: NavProxyService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

            // Add our nav controllers to
            // the nav proxy service...
            navProxy.masterNav = this.masterNav;
            navProxy.detailNav = this.detailNav;

            // set initial pages for
            // our nav controllers...
            this.masterNav.setRoot(HomePage, { detailNavCtrl: this.detailNav });
            this.detailNav.setRoot(PlaceholderPage);
    });
       this.pages = [
      { title: 'Kinder', component: HomePage,arg: null },
      { title: 'Vorlage', component: AttributesSettingsPage, arg: null},
         { title: 'Löschen', component: DeletePage, arg: {deleteAll: true} }
    ];
  }

  openPage(page){
    this.navProxy.masterNav.setRoot(page.component,page.arg);
  }
}

