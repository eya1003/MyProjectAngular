import { Component, OnInit } from '@angular/core';
import { Offre } from 'src/app/Models/Offre';
import { OffreService } from 'src/app/Services/offre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-offre',
  templateUrl: './main-offre.component.html',
  styleUrls: ['./main-offre.component.css']
})
export class MainOffreComponent implements OnInit {
  offre!:Offre[]

  constructor(private serviceOffre:OffreService) { }

  ngOnInit(): void {

    this.serviceOffre.GetAllOffre().subscribe(
      (o)=>{
        this.offre=o;
        console.log(this.offre)
      }
      
      );
  }

  afterDeleteOffre( e:Offre ){
    console.log(e);
    let j=this.offre.indexOf(e);
    this.offre.splice(j,1);
    Swal.fire(
      'Offre   '+e.nomOffre+  
      '   Deleted!',
      'Your file has been deleted.',
      'success'
    );

   
  }

}
