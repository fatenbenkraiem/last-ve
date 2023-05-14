import { Demandeur } from 'src/app/model/Demandeur';
import { User } from './User';
export class Reservation {
  static id(id: any) {
    throw new Error('Method not implemented.');
  }
    id!: number;
    datedebut!: Date;
    datefin!: Date;
   etat!: number;
   user_id!: number;
   ressource!: string;
   demandeur!: string;
   ressources_id!: number;

    
        
}
