import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Departement } from 'src/app/model/Departement';
import { ServiceDepService } from 'src/app/services/service-dep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {

  fg=new FormGroup({
    nomDepartFG:new FormControl('',[Validators.required,Validators.minLength(3)])
    });
    message:any;
    part1: boolean = false;

    departemen: Departement= new Departement;
  constructor(public departservice:ServiceDepService,
    private router: Router) { }

  ngOnInit(): void {
  }
  backToTheList(){
    this.router.navigate(['departement/mainDepartement'])
  }

  get nomDepartFG(){
    return this.fg.get('nomDepartFG')
  }
  close(){
    this.part1=false;
  }
  addDepartement(myform:any){
    this.departservice.addDepartement(myform).subscribe(
      (d)=>{
       console.log("added");
       
  this.router.navigate(['../mainDepartement'])
      });
  }
  public AdddeparteA(){
    this.departservice.addDepartement(this.departemen).subscribe(
      (data)=>this.message="departement Ajouté!");
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    this.part1=true;
    this.router.navigate(['mainDepartement'])
    }

}
