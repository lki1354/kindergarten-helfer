import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttributesPage } from './attributes';

@NgModule({
  declarations: [
    AttributesPage,
  ],
  imports: [
    IonicPageModule.forChild(AttributesPage),
  ],
})
export class AttributesPageModule {}
