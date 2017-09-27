import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {DataProvider} from "../../providers/data/data";
import {NavProxyService} from "../../services/NavProxy.service";
import {AddActivitiePage} from "../add-activitie/add-activitie";
import {ActivitieDetailPage} from "../activitie-detail/activitie-detail";
import {_MasterPage} from "../_MasterPage";

/**
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage extends _MasterPage{

  public activities = [];

  constructor(public navCtrl: NavController,public navParams: NavParams , public modalCtrl: ModalController, public dataService: DataProvider, private navProxy: NavProxyService) {
    super();
    this.dataService.getData('activities').then((activities_stored) => {
      if(activities_stored){
        this.activities = JSON.parse(activities_stored);
      }
  });
  }

  addActivitie(){
    let addModal = this.modalCtrl.create(AddActivitiePage);

    addModal.onDidDismiss((activitie) => {

          if(activitie){
            this.saveActivitie(activitie);
          }

    });

    addModal.present();

  }

  saveActivitie(activitie){
    this.activities.push(activitie);
    this.dataService.save('activities',this.activities)
  }
  saveActivitieAndNew(activitie){
    this.activities.push(activitie);
    this.dataService.save('activities',this.activities)
  }

  viewActivitie(activitie){
    this.navProxy.pushDetail(ActivitieDetailPage, { activitie: activitie  });
  }

}
