import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversiteModule } from './universite/universite.module';
import { PartenaireModule } from './partenaire/partenaire.module';
import { OffreModule } from './offre/offre.module';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BackModule } from './back/back.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontModule } from './front/front.module';
import { ProfFRONTModule } from './prof-front/prof-front.module';




@NgModule({
  declarations: [
    AppComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UniversiteModule,
    PartenaireModule,
    OffreModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FrontModule,
    ProfFRONTModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
