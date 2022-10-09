import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategorialistPageRoutingModule } from './categorialist-routing.module';

import { CategorialistPage } from './categorialist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategorialistPageRoutingModule
  ],
  declarations: [CategorialistPage]
})
export class CategorialistPageModule {}
