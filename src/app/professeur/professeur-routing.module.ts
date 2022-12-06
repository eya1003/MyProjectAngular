import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfesseurComponent } from './add-professeur/add-professeur.component';
import { DeleteProfesseurComponent } from './delete-professeur/delete-professeur.component';
import { MainProfesseurComponent } from './main-professeur/main-professeur.component';
import { StatsComponent } from './stats/stats.component';
import { UpdateProfesseurComponent } from './update-professeur/update-professeur.component';

const routes: Routes = [
  {path : "addProfesseur" ,component:AddProfesseurComponent},
  {path : "mainProfesseur" ,component:MainProfesseurComponent},
  {path : "StatsProfesseur" ,component:StatsComponent},
  {path : "updateProfesseur/:id" ,component:UpdateProfesseurComponent},
  {path : "deleteProfesseur/:id" ,component:DeleteProfesseurComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesseurRoutingModule { }
