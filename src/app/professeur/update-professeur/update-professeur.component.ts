import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Professeur } from 'src/app/Models/Professeur';
import { ServiceDepService } from 'src/app/Services/service-dep.service';
import { ServiceProfService } from 'src/app/Services/service-prof.service';

@Component({
  selector: 'app-update-professeur',
  templateUrl: './update-professeur.component.html',
  styleUrls: ['./update-professeur.component.css']
})
export class UpdateProfesseurComponent implements OnInit {
// driven form
  
  profs = new Professeur
  idProf:any;
  data:any
  depart: any
  constructor(private servicePRof:ServiceProfService,
    private acr:ActivatedRoute,
    private serviceDepart: ServiceDepService , private route:Router) { }

    getdepdata(){
      return this.servicePRof.GetProfById(this.idProf).subscribe(res=>{
        this.data=res;
        this.profs=this.data;
    });
  }
  ngOnInit(): void {
    this.serviceDepart.getDepartements().subscribe((data)=>{
      this.depart=data;
    });
    this.idProf=this.acr.snapshot.params['id'];
  this.getdepdata();
  }


  

   updateprofs(){

    this.servicePRof.UpdateProf(this.profs).subscribe(
      res=>{
       this.getdepdata()
    })
        this.route.navigate(['professeur/mainProfesseur'])
    }

    backToTheList(){
      this.route.navigate(['professeur/mainProfesseur'])
    } 



    




  

}
