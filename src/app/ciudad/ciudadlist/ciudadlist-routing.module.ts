import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CiudadlistPage } from './ciudadlist.page';

const routes: Routes = [
  {
    path: '',
    component: CiudadlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CiudadlistPageRoutingModule {}
