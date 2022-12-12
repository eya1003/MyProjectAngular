import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Partenaire } from 'src/app/Models/Partenaire';
import { Universite } from 'src/app/Models/Universite';
import { PartenaireService } from 'src/app/Services/partenaire.service';
import { UniversiteService } from 'src/app/Services/universite.service';

@Component({
  selector: 'app-add-partenaire',
  templateUrl: './add-partenaire.component.html',
  styleUrls: ['./add-partenaire.component.css']
})
export class AddPartenaireComponent implements OnInit {
  partenaire = new Partenaire();
  unversite : Universite[]=[]
 
  formgroup!:FormGroup



  constructor(private partenaireService:PartenaireService, private univService:UniversiteService, private route:Router , private formbuilder :FormBuilder) { }

  ngOnInit(): void {
   
    // this.univService.GetAllUniversite().subscribe(value => {
    //   this.unversite = value;
    //     const toSelect = this.unversite.find(univer => univer.idUniversite== this.partenaire.universite?.idUniversite);
    //     this.formgroup.get('universite')?.setValue(toSelect);
    //   });

    this.univService.GetAllUniversite().subscribe((data)=>{
      this.unversite = data;
    });
    this.formgroup = this.formbuilder.group({
      nomPartenaire: ['',[ Validators.required, Validators.minLength(3),Validators.pattern('^[A-Z].*')]],
      localisation: ['', [Validators.required,Validators.minLength(4)]],
      email: ['', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      numTelPar: ['', [Validators.required,Validators.pattern('[0-9]{8}')]],
      mobilite: ['', Validators.required],
      support: ['', Validators.required],
      universite: ['', Validators.required],
     
  
  
  });

  }



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
  
  getErrorLocalisation() {
    return this.localisation?.hasError('required') ? 'Field is required' : 
       this.localisation?.hasError('minlength') ? 'You need to specify at least 3 characters' :"";
  }
  
  getErrorNomPartenaire() {
    return this.nomPartenaire?.hasError('required') ?
      'Field is required' :
      this.nomPartenaire?.hasError('minlength') ? 'You need to specify at least 3 characters' : 
      this.nomPartenaire?.hasError('pattern') ? 'should start with A-Z' : "";
    }
  
  getErrorEmail() {
    return this.email?.hasError('required') ? 'Field is required' : 
    this.email?.hasError('pattern') ? 'should be with this form xx@xx.xx' : "";
  
    
  }
  
  getErrorNumeroTelephone() {
    return this.numTelPar?.hasError('required') ? 'Field is required' : 
    this.numTelPar?.hasError('pattern') ? 'this telephone number is incorrect' : "";
  }
  getErrorSupport() {
    return this.support?.hasError('required') ? 'Field is required' : "";
    
  }
  

  Affect(){

    const farah = {
    
      nomPartenaire: this.formgroup.get('nomPartenaire')?.value,
      localisation:this.formgroup.get('localisation')?.value,
      email:this.formgroup.get('email')?.value,
      support:this.formgroup.get('support')?.value,
      numTelPar:this.formgroup.get('numTelPar')?.value,
      mobilite:this.formgroup.get('mobilite')?.value,
      universite:this.formgroup.get('universite')?.value,
      idPartenaire:this.formgroup.get('idPartenaire')?.value,
    }
    
    
    
        this.partenaireService.Affect(farah,this.formgroup.get('universite')?.value).subscribe();
        window.alert('Your event has been added !');
        this.route.navigate(['partenaire/mainpartenaire'])
    
    
    
      }
    

  
  


}
