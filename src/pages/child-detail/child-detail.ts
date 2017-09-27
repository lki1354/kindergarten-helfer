import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {_DetailPage} from "../_DetailPage";

/**
 * Generated class for the ChildDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-child-detail',
  templateUrl: 'child-detail.html',
})
export class ChildDetailPage extends _DetailPage{

  name;
  description;
  attributes;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super();
  }

  ionViewDidLoad(){
    this.name = this.navParams.get('child').name;
    this.description = this.navParams.get('child').description;
    this.attributes = this.navParams.get('child').attributes;
  }

  viewDetails(){

  }


}
