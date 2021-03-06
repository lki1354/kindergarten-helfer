import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {_DetailPage} from "../_DetailPage";
import {_MasterPage} from "../_MasterPage";

/**
 * Generated class for the AttributesSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-attributes-settings',
  templateUrl: 'attributes-settings.html',
})
export class AttributesSettingsPage extends _MasterPage{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AttributesSettingsPage');
  }

}
