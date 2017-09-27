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
  selector: 'page-add-activitie',
  templateUrl: 'add-activitie.html',
})
export class AddActivitiePage extends _DetailPage{

  name;
  attribute;
  public attributes = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public dataService: DataProvider) {
    super()
    this.dataService.getData('attributes').then((attributes_stored) => {
      if(attributes_stored){
        this.attributes = JSON.parse(attributes_stored);
      }
    });
  }

  saveActivitie(){
    let newActivitie= {
      name: this.name,
      attribute: this.attribute
    };
    this.view.dismiss(newActivitie);
  }


 close(){
   this.view.dismiss();
 }

}

