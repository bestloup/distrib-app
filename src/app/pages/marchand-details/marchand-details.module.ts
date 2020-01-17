import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarchandDetailsPageRoutingModule } from './marchand-details-routing.module';

import { MarchandDetailsPage } from './marchand-details.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarchandDetailsPageRoutingModule
  ],
  declarations: [MarchandDetailsPage]
})
export class MarchandDetailsPageModule {}
