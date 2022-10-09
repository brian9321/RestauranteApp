import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaislistPageRoutingModule } from './paislist-routing.module';

import { PaislistPage } from './paislist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaislistPageRoutingModule
  ],
  declarations: [PaislistPage]
})
export class PaislistPageModule {}
