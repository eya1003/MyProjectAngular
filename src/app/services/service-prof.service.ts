import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';
import { Professeur } from '../Models/Professeur';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Pagina } from '../Models/Pagina';

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
  search(Keyword:any):  Observable<any> {
    return this.http.get(this.baseUrl+'searchProf/'+Keyword);
  }
  stats(): Observable<any> {
    return this.http.get(this.baseUrl+"retrieve-all-professeur-stats");
  }
  Affect(professeur:Professeur , id:any){
    return this.http.post<Professeur>(this.baseUrl+'add-professeur-departement/'+id,professeur);
  
  }

  getPagableCustomers(pageNumber: number, 
    pageSize: number): Observable<Pagina> {
        // Initialize Params Object
        let params = new HttpParams();

        // Begin assigning parameters
        params = params.append('page', pageNumber.toString());
        params = params.append('size', pageSize.toString());

        return this.http.get<Pagina>(this.baseUrl+ 'findAllEPaginate', { params: params })

        }
}
