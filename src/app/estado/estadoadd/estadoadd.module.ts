import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstadoaddPageRoutingModule } from './estadoadd-routing.module';

import { EstadoaddPage } from './estadoadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstadoaddPageRoutingModule
  ],
  declarations: [EstadoaddPage]
})
export class EstadoaddPageModule {}
