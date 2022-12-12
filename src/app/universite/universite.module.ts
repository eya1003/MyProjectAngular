import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { MainUniversiteComponent } from './main-universite/main-universite.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { RemoveUniversiteComponent } from './remove-universite/remove-universite.component';
import { UpdateUniversiteComponent } from './update-universite/update-universite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BackModule } from '../back/back.module';


@NgModule({

  declarations: [
    MainUniversiteComponent,
    AddUniversiteComponent,
    RemoveUniversiteComponent,
    UpdateUniversiteComponent
  ],

  imports: [
    CommonModule,
    UniversiteRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BackModule

    
  ]
})
export class UniversiteModule { }
