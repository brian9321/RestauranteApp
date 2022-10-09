import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddrestaurantePage } from './addrestaurante.page';

const routes: Routes = [
  {
    path: '',
    component: AddrestaurantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddrestaurantePageRoutingModule {}
