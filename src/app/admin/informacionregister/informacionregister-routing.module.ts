import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionregisterPage } from './informacionregister.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionregisterPageRoutingModule {}
