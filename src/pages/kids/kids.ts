import { Component } from '@angular/core';
import {NavController, ModalController, NavParams} from 'ionic-angular';
import {AddChildPage } from '../add-child/add-child'
import {ChildDetailPage} from '../child-detail/child-detail'
import { DataProvider } from '../../providers/data/data';
import {_MasterPage} from "../_MasterPage";
import {NavProxyService} from "../../services/NavProxy.service";

@Component({
  selector: 'page-home',
  templateUrl: 'kids.html'
})
export class KidsPage extends _MasterPage{

	public kids = [];

  constructor(public navCtrl: NavController,public navParams: NavParams , public modalCtrl: ModalController, public dataService: DataProvider, private navProxy: NavProxyService) {
    super();
    this.dataService.getData('kids').then((kids_stored) => {
      if(kids_stored){
        this.kids = JSON.parse(kids_stored);
      }
  });
  }

	ionViewDidLoad(){
    console.log('ionViewDidLoad HOmePage');

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
    this.dataService.save('kids',this.kids)
  }
  saveChildAndNew(child){
    child.avatar = 'assets/img/kids/bear.jpg';
    this.kids.push(child);
    this.dataService.save('kids',this.kids)
  }

  viewChild(child){
    this.navProxy.pushDetail(ChildDetailPage, { child: child  });
  }

  deleteChild(child){
    this.dataService.remove(child)
  }

  deleteAll(){
    this.dataService.remove('kids')
    this.navProxy.masterNav.setRoot(KidsPage,null);
  }



}
