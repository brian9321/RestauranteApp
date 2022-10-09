import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadolistPage } from './estadolist.page';

const routes: Routes = [
  {
    path: '',
    component: EstadolistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstadolistPageRoutingModule {}
