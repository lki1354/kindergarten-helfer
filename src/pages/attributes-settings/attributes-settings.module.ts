import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AttributesSettingsPage } from './attributes-settings';

@NgModule({
  declarations: [
    AttributesSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(AttributesSettingsPage),
  ],
})
export class AttributesSettingsPageModule {}
