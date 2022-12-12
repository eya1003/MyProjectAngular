import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/app/Models/Universite';
import { UniversiteService } from 'src/app/Services/universite.service';

@Component({
  selector: 'app-update-universite',
  templateUrl: './update-universite.component.html',
  styleUrls: ['./update-universite.component.css']
})
export class UpdateUniversiteComponent implements OnInit {


 Univer = new Universite
 id:any;
 data:any

  constructor(private universiteService:UniversiteService , private acr:ActivatedRoute , private route:Router) { }

  ngOnInit(): void {
    this.id=this.acr.snapshot.params['id'];
  this.getunivdata();
  }

  getunivdata(){

    return this.universiteService.GetUniversiteById(this.id).subscribe(res=>{
      this.data=res;
      this.Univer=this.data;
    }
      
      )
  }
  updateuniversity(){

    this.universiteService.Updateuniversite(this.Univer).subscribe(res=>{

      this.getunivdata()
    })
    
    this.route.navigate(['universite/mainuniversite'])
  
  
    }
    backToTheList(){
      this.route.navigate(['universite/mainuniversite'])
    }
    
  }



