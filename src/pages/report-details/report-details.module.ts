import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ReportDetailsPage } from './report-details';

@NgModule({
  declarations: [
    ReportDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportDetailsPage),
    TranslateModule.forChild()
  ],
  exports: [
    ReportDetailsPage
  ]
})
export class ReportDetailsPageModule { }
