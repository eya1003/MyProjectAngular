import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professeur } from 'src/app/Models/Professeur';
import { ServiceProfService } from 'src/app/Services/service-prof.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-professeur',
  templateUrl: './delete-professeur.component.html',
  styleUrls: ['./delete-professeur.component.css']
})
export class DeleteProfesseurComponent implements OnInit {

  @Input() professeur!:Professeur;
  @Output() notif=new EventEmitter<any>();
  constructor(private service:ServiceProfService , private route:Router,
    private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  sendnotiftoparent(professeur:Professeur){
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
        this.service.deleteProf(professeur.idProfesseur).subscribe(
          ()=>{
          console.log("good ");
          this.notif.emit(professeur);
        },
        (error )=>{
          console.log("error");
        },
        ()=>{console.log("complete");} );
        Swal.fire(
          professeur.nomProf+' '+professeur.prenomProf+ ' is deleted!',
          'success'
        )
      }
    })
  }
}
