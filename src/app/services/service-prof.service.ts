import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProfService {

  baseUrl=environment.url+"/ProfesseurC/";
  constructor(private http: HttpClient) { }

  public addProf(Prof:any){
    console.log("hello");
    console.log(Prof);
    return this.http.post(this.baseUrl+"addProfesseur",Prof,{responseType:'text'as 'json'});
  }
  public getAllProfs(){
    return this.http.get(this.baseUrl+"getAllProfesseur")
  }
  public deleteProf(idProf:any){
    return this.http.delete(this.baseUrl+"deleteProfesseur/"+idProf)
  }
  public UpdateProf(Prof:any){
    return this.http.put(this.baseUrl+"updateProfesseur",Prof)
  }

  public GetProfById(idp:any){
    return this.http.get(this.baseUrl+"findProfesseurById/"+idp)
  }

  public SEARCHprof(){
    return this.http.get(this.baseUrl+"search")
  }
  stats(): Observable<any> {
    return this.http.get(this.baseUrl+"retrieve-all-professeur-stats");
  }

}
