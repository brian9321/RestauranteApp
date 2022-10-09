import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaisaddPage } from './paisadd.page';

const routes: Routes = [
  {
    path: '',
    component: PaisaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaisaddPageRoutingModule {}
