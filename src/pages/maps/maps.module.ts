import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { MapPage } from './maps';

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
    TranslateModule.forChild()
  ],
  exports: [
    MapPage
  ]
})
export class SearchPageModule { }
