import { Offre } from "./Offre";
import { Support } from "./Support";
import { Universite } from "./Universite";

export class Partenaire{
    idPartenaire !: number;
    nomPartenaire !:string;
    localisation !:string;
    email !:string;
    numTelPar !:number;
    mobilite !:boolean;
    support ! : Support;
    universites ?: Universite;
    offres ? :Offre


}