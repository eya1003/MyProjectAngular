import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Partenaire } from 'src/app/Models/Partenaire';
import { PartenaireService } from 'src/app/Services/partenaire.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-partenaire',
  templateUrl: './delete-partenaire.component.html',
  styleUrls: ['./delete-partenaire.component.css']
})
export class DeletePartenaireComponent implements OnInit {

  @Input() partenaire!:Partenaire;
  @Output() notif=new EventEmitter<any>();

  sendnotiftoparent(partenaire:Partenaire){
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
          this.servicePartenaire.deletePartenaire(partenaire.idPartenaire).subscribe(()=>{
            console.log("good ");
            this.notif.emit(partenaire);
            // this.route.navigateByUrl('/fournisseur/productM');
          },
          (error )=>{
            console.log("error");
          },
          ()=>{console.log("complete");} );

        }
      })
    
  }

  constructor(private servicePartenaire:PartenaireService , private route:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
