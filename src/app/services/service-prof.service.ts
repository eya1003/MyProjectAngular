import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceProfService {

  baseUrl=environment.url;
  constructor(private http: HttpClient) { }

  public addProf(Prof:any){
    console.log("hello");
    console.log(Prof);
    return this.http.post(this.baseUrl+"/ProfesseurC/addProfesseur",Prof,{responseType:'text'as 'json'});
  }
  public getAllProfs(){
    return this.http.get(this.baseUrl+"/ProfesseurC/getAllProfesseur")
  }
  public deleteProf(idProf:any){
    return this.http.delete(this.baseUrl+"/ProfesseurC/deleteProfesseur/"+idProf)
  }
  public UpdateProf(Prof:any){
    return this.http.put(this.baseUrl+"/ProfesseurC/updateProfesseur",Prof)
  }

  public GetProfById(idp:any){
    return this.http.get(this.baseUrl+"/ProfesseurC/findProfesseurById/"+idp)
  }

  public SEARCHprof(){
    return this.http.get(this.baseUrl+"/ProfesseurC/search")
  }

}
