import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { DeleteDepartementComponent } from './delete-departement/delete-departement.component';
import { MainDepartementComponent } from './main-departement/main-departement.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';

const routes: Routes = [
  {path : "addDepartement" ,component:AddDepartementComponent},
  {path : "mainDepartement" ,component:MainDepartementComponent},
  {path : "updateDepartement/:id" ,component:UpdateDepartementComponent},
  {path : "deleteDepartemet/:id" ,component:DeleteDepartementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { }
