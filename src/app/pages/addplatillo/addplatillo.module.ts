import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddplatilloPageRoutingModule } from './addplatillo-routing.module';

import { AddplatilloPage } from './addplatillo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddplatilloPageRoutingModule
  ],
  declarations: [AddplatilloPage]
})
export class AddplatilloPageModule {}
