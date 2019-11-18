import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InscriptionPage } from './inscription.page';
import { FirebaseUIModule } from 'firebaseui-angular';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    FirebaseUIModule,
    RouterModule.forChild([{ path: '', component: InscriptionPage }])
  ],
  declarations: [InscriptionPage]
})
export class InscriptionPageModule {}
