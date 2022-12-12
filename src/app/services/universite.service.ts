import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Universite } from '../Models/Universite';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  UnivURL="http://localhost:8088/SpringMVC/UniversiteC/";
  constructor(private http:HttpClient) { }

  GetAllUniversite(): Observable<Universite[]>{
    return this.http.get<Universite[]>(this.UnivURL)
  }
  GetUniversiteById(idU:any): Observable<Universite[]>{
    return this.http.get<Universite[]>(this.UnivURL+'UniversiteById/'+idU)
  }
  deleteuniversite(idU: any){
    return this.http.delete(this.UnivURL+'deleteUniversite/'+idU);
  }
  Adduniversite(universite: Universite){
    return this.http.post<Universite>(this.UnivURL+'addUniversite',universite);
  }
  Updateuniversite(universite: Universite){
    return this.http.put<Universite>(this.UnivURL+'updateUniversite',universite);
  }
}
