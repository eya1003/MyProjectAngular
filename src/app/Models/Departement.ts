import { Etudiant } from "./etudiant";
import { Professeur } from "./Professeur";

export class Departement{
    idDepart:any|undefined;
    etudiantList: Etudiant|undefined;
    nomDepart: String|undefined;
    professeurs?:  Professeur;
    nbEtage: number|undefined;
    

    
}