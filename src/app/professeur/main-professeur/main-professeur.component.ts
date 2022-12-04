import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceProfService } from 'src/app/services/service-prof.service';

@Component({
  selector: 'app-main-professeur',
  templateUrl: './main-professeur.component.html',
  styleUrls: ['./main-professeur.component.css']
})
export class MainProfesseurComponent implements OnInit {
proff:any;
  constructor(private service:ServiceProfService,
    private acR:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.service.getAllProfs().subscribe(
      (d)=>{
       this.proff=d;
      }
    );
  }
  deleteProfesseur(id:any){
    this.service.deleteProf(id).subscribe(
      (d)=>{
       console.log("deleted");
       
  this.router.navigate(['mainProfesseur'])
      });
  }

}
