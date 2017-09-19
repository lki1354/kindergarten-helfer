import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChildDetailPage } from './child-detail';

@NgModule({
  declarations: [
    ChildDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ChildDetailPage),
  ],
})
export class ChildDetailPageModule {}
