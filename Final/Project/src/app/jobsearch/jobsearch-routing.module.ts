import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobsearchPage } from './jobsearch.page';

const routes: Routes = [
  {
    path: '',
    component: JobsearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobsearchPageRoutingModule {}
