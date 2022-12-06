import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavComponent
  ],exports: [
    NavComponent,
    FooterComponent,
    HeaderComponent,
   
],
  imports: [
    CommonModule,
    BackRoutingModule
  ]
})
export class BackModule { }
