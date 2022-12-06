import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartementModule } from './departement/departement.module';
import { ProfesseurModule } from './professeur/professeur.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BackModule } from './back/back.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DepartementModule,
    ProfesseurModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BackModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
