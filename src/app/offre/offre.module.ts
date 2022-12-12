import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffreRoutingModule } from './offre-routing.module';
import { UpdateOffreComponent } from './update-offre/update-offre.component';
import { MainOffreComponent } from './main-offre/main-offre.component';
import { DeleteOffreComponent } from './delete-offre/delete-offre.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { BackModule } from '../back/back.module';



@NgModule({
  declarations: [
    UpdateOffreComponent,
    MainOffreComponent,
    DeleteOffreComponent,
    AddOffreComponent,
  ],
  imports: [
    CommonModule,
    OffreRoutingModule,
    BackModule
  ]
})
export class OffreModule { }
