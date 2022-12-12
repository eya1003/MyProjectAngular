import { Departement } from "./Departement";
import { Professeur } from "./Professeur";

export class Pagina {
    professeurs?: Professeur[]=[];
    departements?: Departement[]=[];

    totalPages!: number;
    pageNumber!: number;
    pageSize!: number ;
}