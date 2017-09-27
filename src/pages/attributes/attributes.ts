import { Component } from '@angular/core';
import {NavController, ModalController, NavParams} from 'ionic-angular';
import {AddAttributePage } from '../add-attribute/add-attribute'
import {AttributeDetailPage} from '../attribute-detail/attribute-detail'
import { DataProvider } from '../../providers/data/data';
import {_MasterPage} from "../_MasterPage";
import {NavProxyService} from "../../services/NavProxy.service";

@Component({
  selector: 'page-attributes',
  templateUrl: 'attributes.html'
})
export class AttributesPage extends _MasterPage{

	public attributes = [];

  constructor(public navCtrl: NavController,public navParams: NavParams , public modalCtrl: ModalController, public dataService: DataProvider, private navProxy: NavProxyService) {
    super();
    this.dataService.getData('attributes').then((attributes_stored) => {
      if(attributes_stored){
        this.attributes = JSON.parse(attributes_stored);
      }
  });
  }

	ionViewDidLoad(){
    console.log('ionViewDidLoad HOmePage');

  }

  addAttribute(){
    let addModal = this.modalCtrl.create(AddAttributePage);

    addModal.onDidDismiss((attribute) => {

          if(attribute){
            this.saveAttribute(attribute);
          }

    });

    addModal.present();

  }

  saveAttribute(attribute){
    attribute.avatar = 'assets/img/attributes/bear.jpg';
    this.attributes.push(attribute);
    this.dataService.save('attributes',this.attributes)
  }
  saveAttributeAndNew(attribute){
    attribute.avatar = 'assets/img/attributes/bear.jpg';
    this.attributes.push(attribute);
    this.dataService.save('attributes',this.attributes)
  }

  viewAttribute(attribute){
    this.navProxy.pushDetail(AttributeDetailPage, { attribute: attribute  });
  }



}
