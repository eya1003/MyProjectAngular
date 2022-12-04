import { Classe } from "./Classe";

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

}