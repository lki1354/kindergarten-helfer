import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAttributePage } from './add-attribute';

@NgModule({
  declarations: [
    AddAttributePage,
  ],
  imports: [
    IonicPageModule.forChild(AddAttributePage),
  ],
})
export class AddAttributePageModule {}
