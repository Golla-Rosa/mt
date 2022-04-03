import { Notation } from "src/notation/notation.schema";
import { Blueprint } from "./blueprint";
import { Entity } from "./entity";

export class Notations implements Entity {
    name : string;
    english: string;
    latin: string;
    code: string;
    tone: number;
    
    getName(): string {
        return this.english;
    }

    getTone(): number | number[] {
        return this.tone;
    }

    constructor() {}

    Notations(blueprint , note) : Notations {
        
            this.code = blueprint.code + note.code, 
            this.english = blueprint.name + " " + note.name, 
            this.latin = blueprint.name + " " + note.name, 
            this.tone = blueprint.getTone()
        
        return this;
    }
}