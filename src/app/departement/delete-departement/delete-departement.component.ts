import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from 'src/app/Models/Departement';
import { ServiceDepService } from 'src/app/Services/service-dep.service';
import Swal from 'sweetalert2';
import { DepartementModule } from '../departement.module';

@Component({
  selector: 'app-delete-departement',
  templateUrl: './delete-departement.component.html',
  styleUrls: ['./delete-departement.component.css']
})
export class DeleteDepartementComponent implements OnInit {
  @Input() departement!:Departement;
  @Output() notif=new EventEmitter<any>();
  constructor(private service:ServiceDepService , private route:Router,
    private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  sendnotiftoparent(departement:Departement){
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
        this.service.deleteDepartement(departement.idDepart).subscribe(
          ()=>{
          console.log("good ");
          this.notif.emit(departement);
          // this.route.navigateByUrl('/fournisseur/productM');
        },
        (error )=>{
          console.log("error");
        },
        ()=>{console.log("complete");} );
        Swal.fire(
          departement.nomDepart+ ' is deleted!',
          'success'
        )
      }
    })
  }
}
