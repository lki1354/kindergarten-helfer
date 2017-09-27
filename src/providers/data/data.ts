import { Injectable } from '@angular/core';
import { Storage} from '@ionic/storage';

@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {
    //console.log('Hello DataProvider Provider');
  }

  getData(key) {
    return this.storage.get(key);
  }

  save(key,data){
    let newData = JSON.stringify(data);
    this.storage.set(key, newData);
  }
  remove(key){
    return this.storage.remove(key);
  }


}
