import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesseurRoutingModule } from './professeur-routing.module';
import { MainProfesseurComponent } from './main-professeur/main-professeur.component';
import { AddProfesseurComponent } from './add-professeur/add-professeur.component';
import { UpdateProfesseurComponent } from './update-professeur/update-professeur.component';
import { DeleteProfesseurComponent } from './delete-professeur/delete-professeur.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackModule } from '../back/back.module';


@NgModule({
  declarations: [
    MainProfesseurComponent,
    AddProfesseurComponent,
    UpdateProfesseurComponent,
    DeleteProfesseurComponent
  ],
  imports: [
    CommonModule,
    ProfesseurRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BackModule
  ]
})
export class ProfesseurModule { }
