import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RisultatiDiRicercaPage } from './risultati-di-ricerca.page';

const routes: Routes = [
  {
    path: '',
    component: RisultatiDiRicercaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RisultatiDiRicercaPageRoutingModule {}
