import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsearchPageRoutingModule } from './jobsearch-routing.module';

import { JobsearchPage } from './jobsearch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobsearchPageRoutingModule
  ],
  declarations: [JobsearchPage]
})
export class JobsearchPageModule {}
