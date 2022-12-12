import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partenaire } from '../Models/Partenaire';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  UnivURL="http://localhost:8088/SpringMVC/PartenaireC/";

  constructor(private http:HttpClient) { }

  GetAllPartenaire(): Observable<Partenaire[]>{
    return this.http.get<Partenaire[]>(this.UnivURL)
  }
  GetPartenaireById(idU:any): Observable<Partenaire[]>{
    return this.http.get<Partenaire[]>(this.UnivURL+'retrieve-partenaire/'+idU)
  }
  deletePartenaire(idU: any){
    return this.http.delete(this.UnivURL+'deletePartenaire/'+idU);
  }
  AddPartenaire(partenaire: Partenaire){
    return this.http.post<Partenaire>(this.UnivURL+'addPartenaire',partenaire);
  }
  UpdatePartenaire(partenaire:Partenaire , id:any){
    return this.http.put<Partenaire>(this.UnivURL+'updatePartenaire/'+id,partenaire);
  
  }
  Affect(partenaire:Partenaire , id:any){
    return this.http.post<Partenaire>(this.UnivURL+'affectationPartenaireUniversite/'+id,partenaire);
  
  }
  stats(): Observable<any> {
    return this.http.get(this.UnivURL+'retrieve-all-partenaire-stats');
  }
  search(Keyword:any):  Observable<any> {
    return this.http.get(this.UnivURL+'search/'+Keyword);
  }


}
