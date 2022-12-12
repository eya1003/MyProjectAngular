import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from '../Models/Offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  UnivURL="http://localhost:8088/SpringMVC/OffreC/";
  constructor(private http:HttpClient) { }

  GetAllOffre(): Observable<Offre[]>{
    return this.http.get<Offre[]>(this.UnivURL)
  }
  GetOffreById(idU:any): Observable<Offre[]>{
    return this.http.get<Offre[]>(this.UnivURL+'retrieve-Offre/'+idU)
  }
  deleteOffre(idU: any){
    return this.http.delete(this.UnivURL+'deleteOffre/'+idU);
  }
  AddOffre(offre: Offre){
    return this.http.post<Offre>(this.UnivURL+'addOffre',offre);
  }
  UpdateOffre(offre:Offre , id:any){
    return this.http.put<Offre>(this.UnivURL+'updateOffre/'+id,offre);
  
  }
  Affect(offre:Offre , id:any){
    return this.http.post<Offre>(this.UnivURL+'affectationOffrePartenaire/'+id,offre);
  
  }
}
