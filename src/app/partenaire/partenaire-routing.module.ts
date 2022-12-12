import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPartenaireComponent } from './add-partenaire/add-partenaire.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeletePartenaireComponent } from './delete-partenaire/delete-partenaire.component';
import { MainPartenaireComponent } from './main-partenaire/main-partenaire.component';
import { UpdatePartenaireComponent } from './update-partenaire/update-partenaire.component';

const routes: Routes = [

  {path:'mainpartenaire',component:MainPartenaireComponent},
  {path:'addpartenaire',component:AddPartenaireComponent},
  {path:'deletepartenaire',component:DeletePartenaireComponent},
  { path:'dashboard',component:DashboardComponent },
  {path:'updatepartenaire/:id',component:UpdatePartenaireComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartenaireRoutingModule { }
