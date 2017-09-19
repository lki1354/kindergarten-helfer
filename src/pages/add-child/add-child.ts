import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddChildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-child',
  templateUrl: 'add-child.html',
})
export class AddChildPage {

  name;
  description;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  saveChild(){
    let newChild= {
      name: this.name,
      description: this.description
    };
    this.view.dismiss(newChild);
  }


 close(){
   this.view.dismiss();
 }

}
