import {Feedback} from './feedback.model';
import {LinkedList} from "typescript-collections";
import {Utente} from "./user.model";
import {Localita} from "./localita.model";

export class Attivita {
    // Attributes
    Nome: string;
    Salvato: boolean;
    Icona: URL;
    Descrizione: string;
    feedbackList: LinkedList<Feedback>;
    utenteLi: LinkedList<Utente>;
    localita: Array<Localita>;

    // Implemented attributes

    // Operations

    // Implemented operations

}
