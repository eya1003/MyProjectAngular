import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontmainProfesseurComponent } from './frontmain-professeur/frontmain-professeur.component';

const routes: Routes = [
  {path : "mainProfesseur" ,component:FrontmainProfesseurComponent},
];
// for Front
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfFRONTRoutingModule { }
