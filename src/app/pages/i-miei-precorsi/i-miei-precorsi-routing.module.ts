import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IMieiPrecorsiPage } from './i-miei-precorsi.page';

const routes: Routes = [
  {
    path: '',
    component: IMieiPrecorsiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IMieiPrecorsiPageRoutingModule {}
