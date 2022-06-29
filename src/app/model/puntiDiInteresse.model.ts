import {LinkedList} from "typescript-collections";
import {Feedback} from "./feedback.model";
import {Utente} from "./user.model";
import {Localita} from "./localita.model";

export class PuntiDiInteresse {
    // Attributes
    Immagine: URL;
    Nome: string;
    Descrizione: string;
    feedbackList: LinkedList<Feedback>;
    utenti: LinkedList<Utente>;
    localita: LinkedList<Localita>;

    // Implemented attributes

    // Operations

    // Implemented operations

}
