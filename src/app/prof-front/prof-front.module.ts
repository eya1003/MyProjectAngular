import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfFRONTRoutingModule } from './prof-front-routing.module';
import { FrontmainProfesseurComponent } from './frontmain-professeur/frontmain-professeur.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BackModule } from '../back/back.module';
import { FrontaddProfesseurComponent } from './frontadd-professeur/frontadd-professeur.component';

// for Front
@NgModule({
  declarations: [
    FrontmainProfesseurComponent,
    FrontaddProfesseurComponent,
  ],
  imports: [
    CommonModule,
    ProfFRONTRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BackModule
  ]
})
export class ProfFRONTModule { }
