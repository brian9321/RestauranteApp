import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaaddPageRoutingModule } from './categoriaadd-routing.module';

import { CategoriaaddPage } from './categoriaadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaaddPageRoutingModule
  ],
  declarations: [CategoriaaddPage]
})
export class CategoriaaddPageModule {}
