import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
export class ChildDetailPage {

  name;
  description;
  feature

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.name = this.navParams.get('child').name;
    this.description = this.navParams.get('child').description;
  }

  viewDetails(){

  }


}
