/**
 * Created by lukas on 20.09.17.
 */
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

@NgModule({
    declarations: [
        HomePage,
    ],
    imports: [
        IonicPageModule.forChild(HomePage),
    ],
    exports: [
        HomePage
    ]
})
export class ItemsPageModule { }
