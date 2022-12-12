import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/Models/Universite';
import { UniversiteService } from 'src/app/Services/universite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-remove-universite',
  templateUrl: './remove-universite.component.html',
  styleUrls: ['./remove-universite.component.css']
})
export class RemoveUniversiteComponent implements OnInit {

  @Input() universite!:Universite;
  @Output() notif=new EventEmitter<any>();

  sendnotiftoparent(universite:Universite){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.serviceUniv.deleteuniversite(universite.idUniversite).subscribe(()=>{
            console.log("good ");
            this.notif.emit(universite);
            // this.route.navigateByUrl('/fournisseur/productM');
          },
          (error )=>{
            console.log("error");
          },
          ()=>{console.log("complete");} );
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    
  }



  constructor(private serviceUniv:UniversiteService , private route:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
