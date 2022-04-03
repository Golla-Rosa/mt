import { BP_Chord } from "./chord.gap";
import { Entity } from "./entity";
import { Intervalle } from "./intervalle";
import { Note } from "./note";
import { BP_Scale } from "./scale.gap";

export class Scale implements Entity {

    
    code: string;
    name: string;
    tone: number[] = [];
    blueprint: BP_Scale;
    getName(): string {
        return this.name;
    }

    setTones(tones: number[], note: Note) {
        var sum = note.tone;
        this.tone.push(sum)

        for(let i = 0; i <  tones.length; i ++) {
            sum += tones[i];
            this.tone.push(sum)
        }
    }
    getTone(): number | number[] {
       return this.tone;    
    }
}