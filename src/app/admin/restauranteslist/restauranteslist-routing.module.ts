import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestauranteslistPage } from './restauranteslist.page';

const routes: Routes = [
  {
    path: '',
    component: RestauranteslistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestauranteslistPageRoutingModule {}
