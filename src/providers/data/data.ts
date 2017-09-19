import { Injectable } from '@angular/core';
import { Storage} from '@ionic/storage';

@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {
    //console.log('Hello DataProvider Provider');
  }

  getData() {
    return this.storage.get('kids_data');
  }

  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('kids_data', newData);
  }

}
