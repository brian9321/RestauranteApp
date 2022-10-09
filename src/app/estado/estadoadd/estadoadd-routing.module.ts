import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadoaddPage } from './estadoadd.page';

const routes: Routes = [
  {
    path: '',
    component: EstadoaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadoaddPageRoutingModule {}
