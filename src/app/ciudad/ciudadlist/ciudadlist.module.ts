import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CiudadlistPageRoutingModule } from './ciudadlist-routing.module';

import { CiudadlistPage } from './ciudadlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CiudadlistPageRoutingModule
  ],
  declarations: [CiudadlistPage]
})
export class CiudadlistPageModule {}
