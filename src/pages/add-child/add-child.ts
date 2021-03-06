import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {_DetailPage} from "../_DetailPage";
import {DataProvider} from "../../providers/data/data";

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
export class AddChildPage extends _DetailPage{

  name;
  description;
  attributes;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public dataService: DataProvider) {
    super()

    this.dataService.getData('attributes').then((attributes_stored) => {
      if(attributes_stored){
        this.attributes = JSON.parse(attributes_stored);
      }
    });
  }

  saveChild(){
    let newChild= {
      name: this.name,
      description: this.description,
      attributes: this.attributes
    };
    this.view.dismiss(newChild);
  }


 close(){
   this.view.dismiss();
 }

}
