import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"universite",loadChildren:()=>import("./universite/universite.module").then(m=>m.UniversiteModule),},
{path:"partenaire",loadChildren:()=>import("./partenaire/partenaire.module").then(m=>m.PartenaireModule),},
{path:"offre",loadChildren:()=>import("./offre/offre.module").then(m=>m.OffreModule),},
{path:"departement",loadChildren:()=>import("./departement/departement.module").then(m=>m.DepartementModule),
},
{path:"front",loadChildren:()=>import("./prof-front/prof-front-routing.module").then(m=>m.ProfFRONTRoutingModule),
},
{path:"professeur",loadChildren:()=>import("./professeur/professeur.module").then(m=>m.ProfesseurModule),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
