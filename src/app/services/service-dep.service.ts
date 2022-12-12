import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departement } from '../Models/Departement';


@Injectable({
  providedIn: 'root'
})
export class ServiceDepService {
  baseUrl=environment.url;
    constructor(private http: HttpClient) { }

    public addDepartement(departement:Departement){
      console.log("hello");
      console.log(departement);
      return this.http.post(this.baseUrl+"/DepartementC/addDepartement",departement);
    }
    public getDepartements(){
      return this.http.get(this.baseUrl+"/DepartementC/getAll")
    }
    public deleteDepartement(idDept:any){
      return this.http.delete(this.baseUrl+"/DepartementC/deleteDepartement/"+idDept)
    }
    public UpdateDepartement(dept:Departement){
      return this.http.put(this.baseUrl+"/DepartementC/updateDepartement",dept)
    }

    public GetDepartementById(idU:any){
      return this.http.get(this.baseUrl+"/DepartementC/DepartementById/"+idU)
    }
    search(Keyword:any):  Observable<any> {
      return this.http.get(this.baseUrl+'/DepartementC/searchDepart/'+Keyword);
    }
    
}
