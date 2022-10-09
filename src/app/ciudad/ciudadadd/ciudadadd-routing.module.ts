import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CiudadaddPage } from './ciudadadd.page';

const routes: Routes = [
  {
    path: '',
    component: CiudadaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CiudadaddPageRoutingModule {}
