import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartenaireRoutingModule } from './partenaire-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPartenaireComponent } from './main-partenaire/main-partenaire.component';
import { AddPartenaireComponent } from './add-partenaire/add-partenaire.component';
import { DeletePartenaireComponent } from './delete-partenaire/delete-partenaire.component';
import { UpdatePartenaireComponent } from './update-partenaire/update-partenaire.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BackModule } from '../back/back.module';
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import { Ng2SearchPipeModule } from 'ng2-search-filter';





@NgModule({
  declarations: [
    MainPartenaireComponent,
    AddPartenaireComponent,
    DeletePartenaireComponent,
    UpdatePartenaireComponent,
    DashboardComponent,

   
  ],

  imports: [
    CommonModule,
    PartenaireRoutingModule,
    BackModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    Ng2SearchPipeModule,
  

    
  ]
})
export class PartenaireModule {
  
 }
