import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {AddChildPage } from '../add-child/add-child'
import {ChildDetailPage} from '../child-detail/child-detail'
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public kids = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider ) {
    this.dataService.getData().then((kids_data) => {
      if(kids_data){
        this.kids = JSON.parse(kids_data);
      }
  });
  }

	ionViewDidLoad(){


  }

  addChild(){
    let addModal = this.modalCtrl.create(AddChildPage);

    addModal.onDidDismiss((child) => {

          if(child){
            this.saveChild(child);
          }

    });

    addModal.present();

  }

  saveChild(child){
    child.avatar = 'assets/img/kids/bear.jpg';
    this.kids.push(child);
    this.dataService.save(this.kids)
  }

  viewChild(child){
    this.navCtrl.push(ChildDetailPage, {
      child: child
    });
  }


}
