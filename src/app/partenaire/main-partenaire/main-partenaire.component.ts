import { Component, Input, OnInit } from '@angular/core';
import { Partenaire } from 'src/app/Models/Partenaire';
import { Universite } from 'src/app/Models/Universite';
import { PartenaireService } from 'src/app/Services/partenaire.service';
import { UniversiteService } from 'src/app/Services/universite.service';
import Swal from 'sweetalert2';
import { Observable, BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-main-partenaire',
  templateUrl: './main-partenaire.component.html',
  styleUrls: ['./main-partenaire.component.css']
})
export class MainPartenaireComponent implements OnInit {
  
;
  partenaire! :Partenaire[]
  dat:any
  searchvalue !:string
  listsearch : Partenaire[]=[];
  /*listmanipulation !: Partenaire[];
  isfound !: Partenaire;
  parten !:Partenaire
  find: number=0 */
  unversite! : Universite[]

  refresh$ = new BehaviorSubject(null);
  list?: Observable<Partenaire[]>

  constructor(private paretenaireService:PartenaireService, private universites:UniversiteService) { }

  ngOnInit(): void {


this.getAllPartenaire()
    
    

     this.list = this.refresh$.pipe(switchMap(() => this.paretenaireService.search(this.searchvalue)))
/*     this.listmanipulation=this.partenaire;
    this.listsearch=this.partenaire; */

  }

  getAllPartenaire(){


    this.paretenaireService.GetAllPartenaire().subscribe(
      (u)=>{
        this.partenaire=u;
        console.log(this.partenaire)
      }
      
      );
  }


  afterDeleteUniversite( e:Partenaire ){
    console.log(e);
    let j=this.partenaire.indexOf(e);
    this.partenaire.splice(j,1);
    Swal.fire(
      'Universite   '+e.nomPartenaire +  
      '   Deleted!',
      'Your file has been deleted.',
      'success'
    );

   
  }


  onsearch(){
    if ( this.searchvalue.length!=0) {
    this.paretenaireService.search(this.searchvalue).subscribe(
      (data) => {
        
          this.partenaire= data;
        
      },
      () => this.getAllPartenaire()
    );
  }
    this.refresh$.next(null);
    }
  

  /* search_Partenaire($event: string) {
    this.listmanipulation = this.partenaire;
    this.listsearch=[];
    for (let entry of Array.from(this.listmanipulation.entries())) {
      if (entry[1].nomPartenaire.indexOf($event) != -1 ) {
        this.isfound = entry[1];
        this.find=1;
        
      }
      else
        this.find=0;
      if(this.find)
        this.listsearch.push(this.isfound);
      this.find=0;
    }
    this.listmanipulation=this.listsearch;
    if (!$event)
      this.listmanipulation = this.partenaire;

     
  }

 */

}
