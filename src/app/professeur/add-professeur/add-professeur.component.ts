import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from 'src/app/Models/Departement';
import { Professeur } from 'src/app/Models/Professeur';
import { ServiceDepService } from 'src/app/Services/service-dep.service';
import { ServiceProfService } from 'src/app/Services/service-prof.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-professeur',
  templateUrl: './add-professeur.component.html',
  styleUrls: ['./add-professeur.component.css']
})
export class AddProfesseurComponent implements OnInit {
  profe: Professeur= new Professeur;
  formgroup!:FormGroup;
  

  constructor(private service: ServiceProfService,
              private serviceDepart: ServiceDepService,
               private router: Router,
               private formbuilder :FormBuilder) { }
               
  message:any;
  part1: boolean = false;

// ereeur  notredepar:Departement[]=[]
depart: any
   ngOnInit(): void {

    this.serviceDepart.getDepartements().subscribe((data)=>{
      this.depart=data;
    });
    this.formgroup = this.formbuilder.group({
      prenomProf: ['',[ Validators.required, Validators.minLength(3),Validators.pattern('^[A-Z].*')]],
      nomProf: ['', [Validators.required,Validators.minLength(3),Validators.pattern('^[A-Z].*')]],
      emailProf: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      numTelProf: ['', [Validators.required,Validators.pattern('[0-9]{8}')]],
      module: ['', Validators.required,] ,
      anneeAmb: ['', Validators.required],
      nbrheure : ['', Validators.required],
      classe: ['', Validators.required],
      departementsProf: ['', Validators.required],
     
  
  
  });
}

get prenomProf(){
  return this.formgroup.get('prenomProf') as FormControl;
}
get nomProf(){
  return this.formgroup.get('nomProf')as FormControl;
}
get emailProf(){
  return this.formgroup.get('emailProf')as FormControl;
}
get numTelProf(){
  return this.formgroup.get('numTelProf')as FormControl;
}
get module(){
  return this.formgroup.get('module')as FormControl;
}
get anneeAmb(){
  return this.formgroup.get('anneeAmb')as FormControl;
}
get nbrheure(){
  return this.formgroup.get('nbrheure')as FormControl;
}
get classe(){
  return this.formgroup.get('classe')as FormControl;
}
 get departementsProf(){
  return this.formgroup.get('departementsProf')as FormControl;
} 
// <!-- driven form 
  /* backToTheList(){
    this.router.navigate(['professeur/mainProfesseur'])
  }
  public AddProfesseur(){
    this.service.addProf(this.profe).subscribe(
      (data)=>this.message="departement Ajouté!");
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    this.part1=true;
    this.router.navigate(['professeur/mainProfesseur'])
    } */
    
    Affect(){

      const formu = {
      
        prenomProf: this.formgroup.get('prenomProf')?.value,
        nomProf:this.formgroup.get('nomProf')?.value,
        emailProf:this.formgroup.get('emailProf')?.value,
        numTelProf:this.formgroup.get('numTelProf')?.value,
        module:this.formgroup.get('module')?.value,
        anneeAmb:this.formgroup.get('anneeAmb')?.value,
        nbrheure:this.formgroup.get('nbrheure')?.value,
        classe:this.formgroup.get('classe')?.value,
        departementsProf:this.formgroup.get('departementsProf')?.value, 
        idProfesseur:this.formgroup.get('idProfesseur')?.value,
      }
      
      
      
          this.service.Affect(formu,this.formgroup.get('departementsProf')?.value).subscribe();
          window.alert('Your event has been added !');
          this.router.navigate(['professeur/mainProfesseur'])
      
      
      
        }

}
