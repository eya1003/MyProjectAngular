import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Pagina } from 'src/app/Models/Pagina';
import { Professeur } from 'src/app/Models/Professeur';
import { ServiceProfService } from 'src/app/Services/service-prof.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-frontmain-professeur',
  templateUrl: './frontmain-professeur.component.html',
  styleUrls: ['./frontmain-professeur.component.css']
})
export class FrontmainProfesseurComponent implements OnInit {
  proff:any;
  proffss:any;
  pag:any
  page : any;
   pageSize:number = 2;
  searchvalue !:string
    listsearch : Professeur[]=[];
    currentSelectedPage:number = 0;
    totalPages: number = 0;
    pageIndexes: Array<number> = [];
    refresh$ = new BehaviorSubject(null);
  
    constructor(private service:ServiceProfService,
      private acR:ActivatedRoute,
      private router: Router) { }
  
    ngOnInit(): void {
      this.getPage(0);
  
      this.Profs();
    }
    deleteProfesseur(id:any){
      this.service.deleteProf(id).subscribe(
        (d)=>{
         console.log("deleted");
         
    this.router.navigate(['mainProfesseur'])
        });
    }
    afterDeleteProfesseur( e:Professeur ){
      console.log(e);
      let j=this.proff.indexOf(e);
      this.proff.splice(j,1);
      Swal.fire(
        'Professeur :   '+e.nomProf + ' ' +e.prenomProf+  
        '   Deleted!',
        'Your file has been deleted.',
        'success'
      );
  }
  
  onsearch(){
    if ( this.searchvalue.length!=0) {
    this.service.search(this.searchvalue).subscribe(
      (data) => {
        
          this.proff= data;
        
      },
      () => this.getAllProfesseurs()
    );
  }
    this.refresh$.next(null);
    }
  
    getAllProfesseurs(){
  
  
      this.service.getAllProfs().subscribe(
        (u)=>{
          this.proff=u;
          console.log(this.proff)
        }
        
        );
    }
  
    getPage(page: number){
  
      this.service.getPagableCustomers(page, this.pageSize)
              .subscribe(
                  (pag: Pagina) => {
                    console.log(pag);
                    this.proffss = pag.professeurs;
                    this.totalPages = pag.totalPages;
                    this.pageIndexes = Array(this.totalPages).fill(0).map((x,i)=>i);
                    this.currentSelectedPage = pag.pageNumber;
                  },
                  (error) => {
                    console.log(error);
                  }
              );
    }
    nextClick(){
      if(this.currentSelectedPage < this.totalPages-1){
        this.getPage(++this.currentSelectedPage);
      }  
    }
    
    previousClick(){
      if(this.currentSelectedPage > 0){
        this.getPage(--this.currentSelectedPage);
      }  
    }
    getPaginationWithIndex(index: number) {
      this.getPage;
     }
     active(index: number) {
      if(this.currentSelectedPage == index ){
        return {
          active: true
        };
      } return {
        active: false
      };
     }
  
  
     Profs()
  {let resp=this.service.getAllProfs();
    resp.subscribe((data)=>this.proffss=data);
  
  }
  }
  