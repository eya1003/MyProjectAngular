import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Partenaire } from 'src/app/Models/Partenaire';
import { Universite } from 'src/app/Models/Universite';
import { PartenaireService } from 'src/app/Services/partenaire.service';
import { UniversiteService } from 'src/app/Services/universite.service';

@Component({
  selector: 'app-update-partenaire',
  templateUrl: './update-partenaire.component.html',
  styleUrls: ['./update-partenaire.component.css']
})
export class UpdatePartenaireComponent implements OnInit {

  partenaire = new Partenaire
  unversite! : Universite[]
  id:any;
  data:any
  

  constructor(private partenaireservice:PartenaireService ,private universiteservice:UniversiteService, private acr:ActivatedRoute , private route:Router, private formbuilder :FormBuilder) { }

  ngOnInit(): void {


      this.partenaireservice.GetPartenaireById(this.acr.snapshot.params['id']).subscribe((result:any)=>
      {this.formgroup= new FormGroup({
        nomPartenaire: new FormControl(result['nomPartenaire']),
        localisation:new FormControl(result['localisation']),
        email:new FormControl(result['email']),
        numTelPar:new FormControl(result['numTelPar']),
        mobilite:new FormControl(result['mobilite']),
        universite:new FormControl(result['universite']),
        support:new FormControl(result['support'])
      })})
  }

  formgroup= new FormGroup({
    nomPartenaire: new FormControl('',[Validators.required ,Validators.minLength(3),Validators.pattern('^[A-Z].*')]),
    localisation: new FormControl('',[Validators.required,Validators.minLength(4)]),
    numTelUniv:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]),
    numTelPar:new FormControl('',Validators.required),
    mobilite:new FormControl('',Validators.required),
    universite:new FormControl('',Validators.required),
    support:new FormControl('',Validators.required)
  });

  get nomPartenaire(){
    return this.formgroup.get('nomPartenaire') as FormControl;
  }
  get localisation(){
    return this.formgroup.get('localisation')as FormControl;
  }
  get email(){
    return this.formgroup.get('email')as FormControl;
  }
  get numTelPar(){
    return this.formgroup.get('numTelPar')as FormControl;
  }
  get mobilite(){
    return this.formgroup.get('mobilite')as FormControl;
  }
  get support(){
    return this.formgroup.get('support')as FormControl;
  }
  get universite(){
    return this.formgroup.get('universite')as FormControl;
  }



  
  updatePartenaire(par : Partenaire , idpar:any){
    this.partenaireservice.UpdatePartenaire(par,this.acr.snapshot.params['id']).subscribe();
    window.alert('Your Partenaire has been modified !');
    this.route.navigate(['partenaire/mainpartenaire'])

  }

  GetPartenaireByID(idPar: any){

    this.partenaireservice.GetPartenaireById(idPar).subscribe();
  
  }
}
