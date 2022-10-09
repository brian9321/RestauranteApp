import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorialistPage } from './categorialist.page';

const routes: Routes = [
  {
    path: '',
    component: CategorialistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategorialistPageRoutingModule {}
