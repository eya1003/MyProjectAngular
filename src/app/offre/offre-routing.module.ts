import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { DeleteOffreComponent } from './delete-offre/delete-offre.component';
import { MainOffreComponent } from './main-offre/main-offre.component';
import { UpdateOffreComponent } from './update-offre/update-offre.component';

const routes: Routes = [

  {path:'mainoffre',component:MainOffreComponent},
  {path:'addoffre',component:AddOffreComponent},
  {path:'deleteoffre',component:DeleteOffreComponent},
  {path:'updateoffre',component:UpdateOffreComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffreRoutingModule { }
