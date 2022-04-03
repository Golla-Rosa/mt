import { Alteration } from "./alterations";
import { Entity } from "./entity";
import { BP_Interval } from "./interval.gap";
import { Notations } from "./notations";
import { Note } from "./note";

export class Intervalle implements Entity {
    name: string;
    code: string;
    blueprint: string;
    tone: number [];

   
    
    // notesObj: Note[] = [];
    // notes: number[] = [];

    constructor(note:  Note, blueprint: BP_Interval, noteList: Note[], idx: number[]) {
        this.code = `IT${idx[0]}${idx[1]}`
        this.blueprint = blueprint.code;
        this.name = note.getName() + " " + blueprint.getName()
        this.tone = [note.tone, blueprint.tone + note.tone]
    
        // this.notesObj.push(note);
        // this.notesObj.push(noteList.find(n => n.tone === blueprint.tone + note.tone));
     
    }


    getName(): string {
        return this.name
    }

    getTone(): number[] {
        return this.tone;
    }
}