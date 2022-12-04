
export class Etudiant {
    idEtudiant: number |undefined;
    nomE: String|undefined;
    prenomE: String |undefined;
   

    constructor(  
        nomE: String,
        prenomE: String,
        idEtudiant?:number )
    
    {   if(idEtudiant){ this.idEtudiant=idEtudiant;
        this.nomE=nomE;
        this.prenomE=prenomE;}
        else {
            this.nomE=nomE;
            this.prenomE=prenomE;
        }
    };
    

}