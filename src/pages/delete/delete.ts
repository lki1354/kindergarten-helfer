import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {_MasterPage} from "../_MasterPage";

/**
 * Generated class for the DeletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delete',
  templateUrl: 'delete.html',
})
export class DeletePage extends _MasterPage{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeletePage');
  }

}
