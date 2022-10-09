import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestauranteinfoPageRoutingModule } from './restauranteinfo-routing.module';

import { RestauranteinfoPage } from './restauranteinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestauranteinfoPageRoutingModule
  ],
  declarations: [RestauranteinfoPage]
})
export class RestauranteinfoPageModule {}
