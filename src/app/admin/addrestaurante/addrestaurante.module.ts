import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddrestaurantePageRoutingModule } from './addrestaurante-routing.module';

import { AddrestaurantePage } from './addrestaurante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddrestaurantePageRoutingModule
  ],
  declarations: [AddrestaurantePage]
})
export class AddrestaurantePageModule {}
