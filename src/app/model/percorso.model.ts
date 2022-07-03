import {Attivita} from "./attivita.model";
import {PercorsoAvviato} from "./percorsoAvviato.model";
import {Mappa} from "./mappa.model";

export class Percorso extends Attivita {

    private _pE: number;
    private _lunghezza: number;
    private _avviato: boolean;
    private _tipo: String;
    private _difficoltà: string;
    private _percorsoAvviato: PercorsoAvviato;
    private _mappa: Mappa;


    get pE(): number {
        return this._pE;
    }

    set pE(value: number) {
        this._pE = value;
    }

    get lunghezza(): number {
        return this._lunghezza;
    }

    set lunghezza(value: number) {
        this._lunghezza = value;
    }

    get avviato(): boolean {
        return this._avviato;
    }

    set avviato(value: boolean) {
        this._avviato = value;
    }

    get tipo(): String {
        return this._tipo;
    }

    set tipo(value: String) {
        this._tipo = value;
    }

    get difficoltà(): string {
        return this._difficoltà;
    }

    set difficoltà(value: string) {
        this._difficoltà = value;
    }

    get percorsoAvviato(): PercorsoAvviato {
        return this._percorsoAvviato;
    }

    set percorsoAvviato(value: PercorsoAvviato) {
        this._percorsoAvviato = value;
    }

    get mappa(): Mappa {
        return this._mappa;
    }

    set mappa(value: Mappa) {
        this._mappa = value;
    }
}

