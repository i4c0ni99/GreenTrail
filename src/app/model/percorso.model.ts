import {Attivita} from "./attivita.model";
import {PercorsoAvviato} from "./percorsoAvviato.model";
import {Mappa} from "./mappa.model";

export class Percorso extends Attivita {
    // Attributes
    PE: number;
    Lunghezza: number;
    Avviato: boolean;
    Tipo: Categoria.sport;
    Difficoltà: string;
    percorsoAvviato: PercorsoAvviato;
    mappa: Mappa;

    // Implemented attributes

    // Operations

    // Implemented operations

}

