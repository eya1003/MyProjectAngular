import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/Models/Departement';
import { ServiceDepService } from 'src/app/Services/service-dep.service';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrls: ['./update-departement.component.css']
})
export class UpdateDepartementComponent implements OnInit {
  Departe = new Departement
  idDepart:any;
  data:any

  constructor(private serviceDepart:ServiceDepService,
    private acr:ActivatedRoute , private route:Router) { }

    getdepdata(){
      return this.serviceDepart.GetDepartementById(this.idDepart).subscribe(res=>{
        this.data=res;
        this.Departe=this.data;
    });
  }
  ngOnInit(): void {
    this.idDepart=this.acr.snapshot.params['id'];
  this.getdepdata();
  }


   updatedeparte(){

    this.serviceDepart.UpdateDepartement(this.Departe).subscribe(
      res=>{
       this.getdepdata()
    })
        this.route.navigate(['departement/mainDepartement'])
    }

    backToTheList(){
      this.route.navigate(['./mainDepartement'])
    }
}
