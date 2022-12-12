import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { MainUniversiteComponent } from './main-universite/main-universite.component';
import { RemoveUniversiteComponent } from './remove-universite/remove-universite.component';
import { UpdateUniversiteComponent } from './update-universite/update-universite.component';

const routes: Routes = [

  {path:'mainuniversite',component:MainUniversiteComponent},
  {path:'adduniversite',component:AddUniversiteComponent},
  {path:'deleteuniversite',component:RemoveUniversiteComponent},
  {path:'updateuniversite/:id',component:UpdateUniversiteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversiteRoutingModule { }
