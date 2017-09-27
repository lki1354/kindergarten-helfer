import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivitieDetailPage } from './activitie-detail';

@NgModule({
  declarations: [
    ActivitieDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivitieDetailPage),
  ],
})
export class ActivitieDetailPageModule {}
