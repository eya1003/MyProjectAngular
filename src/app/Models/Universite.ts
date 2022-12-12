import { Partenaire } from "./Partenaire";

export class Universite{
    idUniversite !: number;
    nomUniv !:string;
    email !:string;
    partenaires ?: Partenaire;


}