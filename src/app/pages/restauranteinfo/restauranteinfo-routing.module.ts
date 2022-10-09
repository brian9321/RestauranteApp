import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestauranteinfoPage } from './restauranteinfo.page';

const routes: Routes = [
  {
    path: '',
    component: RestauranteinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestauranteinfoPageRoutingModule {}
