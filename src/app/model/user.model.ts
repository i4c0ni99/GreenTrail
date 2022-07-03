import {LinkedList} from "typescript-collections";
import {Attivita} from "./attivita.model";
import {PuntiDiInteresse} from "./puntiDiInteresse.model";
import {Mappa} from "./mappa.model";
import {PercorsoAvviato} from "./percorsoAvviato.model";
import {Segnalazioni} from "./segnalazioni.model";

export class Utente {

    private _nome: string;
    private _cognome: string;
    private _email: string;
    private _pE: number;
    private _mappe: LinkedList<Mappa>;
    private _percorsoAvviato: PercorsoAvviato;
    private _attivitaList: LinkedList<Attivita>;
    private _puntiDiInteresse: PuntiDiInteresse;
    private _segnalazioni: LinkedList<Segnalazioni>;


    get nome(): string {
        return this._nome;
    }

    set nome(value: string) {
        this._nome = value;
    }

    get cognome(): string {
        return this._cognome;
    }

    set cognome(value: string) {
        this._cognome = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get pE(): number {
        return this._pE;
    }

    set pE(value: number) {
        this._pE = value;
    }

    get mappe(): LinkedList<Mappa> {
        return this._mappe;
    }

    set mappe(value: LinkedList<Mappa>) {
        this._mappe = value;
    }

    get percorsoAvviato(): PercorsoAvviato {
        return this._percorsoAvviato;
    }

    set percorsoAvviato(value: PercorsoAvviato) {
        this._percorsoAvviato = value;
    }

    get attivitaList(): LinkedList<Attivita> {
        return this._attivitaList;
    }

    set attivitaList(value: LinkedList<Attivita>) {
        this._attivitaList = value;
    }

    get puntiDiInteresse(): PuntiDiInteresse {
        return this._puntiDiInteresse;
    }

    set puntiDiInteresse(value: PuntiDiInteresse) {
        this._puntiDiInteresse = value;
    }

    get segnalazioni(): LinkedList<Segnalazioni> {
        return this._segnalazioni;
    }

    set segnalazioni(value: LinkedList<Segnalazioni>) {
        this._segnalazioni = value;
    }
}
