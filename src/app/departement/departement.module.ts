import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { MainDepartementComponent } from './main-departement/main-departement.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { DeleteDepartementComponent } from './delete-departement/delete-departement.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackModule } from '../back/back.module';


@NgModule({
  declarations: [
    MainDepartementComponent,
    AddDepartementComponent,
    UpdateDepartementComponent,
    DeleteDepartementComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BackModule
  ]
})
export class DepartementModule { }
