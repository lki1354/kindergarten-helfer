import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttributeDetailPage } from './attribute-detail';

@NgModule({
  declarations: [
    AttributeDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AttributeDetailPage),
  ],
})
export class AttributeDetailPageModule {}
