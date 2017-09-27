
import { Component } from '@angular/core';

import { KidsPage } from '../kids/kids';
import { AttributesPage } from '../attributes/attributes';
import { ActivitiesPage } from '../activities/activities';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = KidsPage;
  tab2Root: any = AttributesPage;
  tab3Root: any = ActivitiesPage;

  constructor() {

  }
}
