import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaisaddPageRoutingModule } from './paisadd-routing.module';

import { PaisaddPage } from './paisadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaisaddPageRoutingModule
  ],
  declarations: [PaisaddPage]
})
export class PaisaddPageModule {}
