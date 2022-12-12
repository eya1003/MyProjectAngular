import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Universite } from 'src/app/Models/Universite';
import { UniversiteService } from 'src/app/Services/universite.service';

@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit {

  universite = new Universite();
  constructor(private universiteService:UniversiteService, private route:Router) { }

  ngOnInit(): void {
  }
  AddUniversite()
{
  this.universiteService.Adduniversite(this.universite).subscribe(()=>this.route.navigateByUrl("universite/mainuniversite"));
}

}
