import { Component, OnInit } from '@angular/core';
import { Universite } from 'src/app/Models/Universite';
import { UniversiteService } from 'src/app/Services/universite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-universite',
  templateUrl: './main-universite.component.html',
  styleUrls: ['./main-universite.component.css']
})
export class MainUniversiteComponent implements OnInit {

  universite ! : Universite[];
  constructor(private UnivService:UniversiteService) { }

  ngOnInit(): void {
this.UnivService.GetAllUniversite().subscribe(
(u)=>{
  this.universite=u;
}

);
  }

  afterDeleteUniversite( e:Universite ){
    console.log(e);
    let j=this.universite.indexOf(e);
    this.universite.splice(j,1);
    Swal.fire(
      'Universite   '+e.nomUniv+  
      '   Deleted!',
      'Your file has been deleted.',
      'success'
    );

   
  }

}
