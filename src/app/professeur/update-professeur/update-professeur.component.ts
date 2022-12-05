import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professeur } from 'src/app/model/Professeur';
import { ServiceProfService } from 'src/app/services/service-prof.service';

@Component({
  selector: 'app-update-professeur',
  templateUrl: './update-professeur.component.html',
  styleUrls: ['./update-professeur.component.css']
})
export class UpdateProfesseurComponent implements OnInit {

  profs = new Professeur
  idProf:any;
  data:any

  constructor(private servicePRof:ServiceProfService,
    private acr:ActivatedRoute , private route:Router) { }

    getdepdata(){
      return this.servicePRof.GetProfById(this.idProf).subscribe(res=>{
        this.data=res;
        this.profs=this.data;
    });
  }
  ngOnInit(): void {
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
