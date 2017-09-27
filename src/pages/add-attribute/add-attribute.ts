import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {_DetailPage} from "../_DetailPage";

/**
 * Generated class for the AddChildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-attribute',
  templateUrl: 'add-attribute.html',
})
export class AddAttributePage extends _DetailPage{

  name;
  description;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
    super()
  }

  saveAttribute(){
    let newAttribute= {
      name: this.name,
      description: this.description
    };
    this.view.dismiss(newAttribute);
  }


 close(){
   this.view.dismiss();
 }

}
