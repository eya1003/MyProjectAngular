import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavfrontComponent } from './navfront/navfront.component';

export { NavComponent } from './nav/nav.component';
export { FooterComponent } from './footer/footer.component';
export { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [

    NavComponent,
    FooterComponent,
    HeaderComponent,
    NavfrontComponent

  ],

  exports: [
    NavComponent,
    FooterComponent,
    HeaderComponent,
    NavfrontComponent,
],
  imports: [
    CommonModule,
    BackRoutingModule
  ]
})
export class BackModule { }
