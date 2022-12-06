import { Classe } from "./Classe";
import { Departement } from "./Departement";

export class Professeur{
    idProfesseur: number |undefined;
    nomProf: String|undefined;
    prenomProf: String|undefined;
    emailProf: String|undefined;
    numTelProf: number |undefined;
    module: String|undefined;
    anneeAmb: Date |undefined;
    nbrheure: number |undefined;
    classe: Classe | undefined;
    departementsProf: Departement| undefined;

}