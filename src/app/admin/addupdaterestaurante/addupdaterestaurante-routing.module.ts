import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddupdaterestaurantePage } from './addupdaterestaurante.page';

const routes: Routes = [
  {
    path: '',
    component: AddupdaterestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddupdaterestaurantePageRoutingModule {}
