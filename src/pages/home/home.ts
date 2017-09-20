import { Component } from '@angular/core';
import {NavController, ModalController, NavParams} from 'ionic-angular';
import {AddChildPage } from '../add-child/add-child'
import {ChildDetailPage} from '../child-detail/child-detail'
import { DataProvider } from '../../providers/data/data';
import {_MasterPage} from "../_MasterPage";
import {NavProxyService} from "../../services/NavProxy.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends _MasterPage{

	public kids = [];

  deleteButton;

  constructor(public navCtrl: NavController,public navParams: NavParams , public modalCtrl: ModalController, public dataService: DataProvider, private navProxy: NavProxyService) {
    super();
    this.deleteButton = this.navParams.get('deleteButton');
    this.dataService.getData().then((kids_data) => {
      if(kids_data){
        this.kids = JSON.parse(kids_data);
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
    this.dataService.save(this.kids)
  }
  saveChildAndNew(child){
    child.avatar = 'assets/img/kids/bear.jpg';
    this.kids.push(child);
    this.dataService.save(this.kids)
  }

  viewChild(child){
    this.navProxy.pushDetail(ChildDetailPage, { child: child  });
  }

  deleteChild(child){
    this.dataService.remove(child)
  }

  deleteAll(){
    this.dataService.removeAll()
    this.navProxy.masterNav.setRoot(HomePage,null);
  }



}
