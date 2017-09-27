/**
 * Created by lukas on 20.09.17.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KidsPage } from './kids';

@NgModule({
    declarations: [
        KidsPage,
    ],
    imports: [
        IonicPageModule.forChild(KidsPage),
    ],
    exports: [
        KidsPage
    ]
})
export class ItemsPageModule { }
