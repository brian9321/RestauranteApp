import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddupdaterestaurantePageRoutingModule } from './addupdaterestaurante-routing.module';

import { AddupdaterestaurantePage } from './addupdaterestaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddupdaterestaurantePageRoutingModule
  ],
  declarations: [AddupdaterestaurantePage]
})
export class AddupdaterestaurantePageModule {}
