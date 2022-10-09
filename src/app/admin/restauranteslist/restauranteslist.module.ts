import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestauranteslistPageRoutingModule } from './restauranteslist-routing.module';

import { RestauranteslistPage } from './restauranteslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestauranteslistPageRoutingModule
  ],
  declarations: [RestauranteslistPage]
})
export class RestauranteslistPageModule {}
