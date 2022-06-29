import {LinkedList} from "typescript-collections";
import {Attivita} from "./attivita.model";
import {PuntiDiInteresse} from "./puntiDiInteresse.model";
import {Mappa} from "./mappa.model";
import {PercorsoAvviato} from "./percorsoAvviato.model";
import {Segnalazioni} from "./segnalazioni.model";

export class Utente {
    // Attributes
    Nome: string;
    Cognome: string;
    Email: string;
    PE: number;
    mappe: LinkedList<Mappa>;
    percorsoAvviato: PercorsoAvviato;
    attivitaList: LinkedList<Attivita>;
    puntiDiInteresse: PuntiDiInteresse;
    segnalazioni: LinkedList<Segnalazioni>;

    // Implemented attributes

    // Operations

    // Implemented operations

}
