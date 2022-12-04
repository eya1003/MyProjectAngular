import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professeur } from 'src/app/model/Professeur';
import { ServiceProfService } from 'src/app/services/service-prof.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-professeur',
  templateUrl: './add-professeur.component.html',
  styleUrls: ['./add-professeur.component.css']
})
export class AddProfesseurComponent implements OnInit {
  profe: Professeur= new Professeur;

  constructor(private service: ServiceProfService, private router: Router) { }
  message:any;
  part1: boolean = false;
  ngOnInit(): void {
  }
  backToTheList(){
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
    }
    
    
}
