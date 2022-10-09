import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaaddPage } from './categoriaadd.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaaddPageRoutingModule {}
