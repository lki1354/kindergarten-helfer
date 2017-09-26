import { Injectable } from '@angular/core';
import { File } from '@ionic-native/file';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataSaverProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataSaverProvider {

  constructor(public file: File) {
    console.log('Hello DataSaverProvider Provider');
  }

}
