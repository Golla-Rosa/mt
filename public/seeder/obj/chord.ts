import { BP_Chord } from "./chord.gap";
import { Entity } from "./entity";
import { Intervalle } from "./intervalle";
import { Note } from "./note";

export class Chord implements Entity 
{
    code: string;
    name: string;
    blueprint: string;
    tone: number[];
    notes: Note[] = [];
    intervals: string[] = [];

    getName(): string {
       return this.name;
    }
    getTone(): number | number[] {
        return this.tone;
    }
}