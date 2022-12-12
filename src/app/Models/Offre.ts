import { Partenaire } from "./Partenaire";

export class Offre{
    idOffre !: number;
    nomOffre !:string;
    descriptionOffre !:string;
    typeOffre !:string;
    listpartenaire ? :Partenaire;

}