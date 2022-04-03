import { Alteration } from "./alterations";
import { Entity } from "./entity";
import { Notations } from "./notations";

export class Note implements Entity {
    code: string;
    name: string
    tone: number;
    alteration: string;
    blueprint: string;

    alterationObj: Alteration;
    namesObj: Notations
    getName() { 
        return this.namesObj.english + this.alterationObj.signe; 
    }

    getTone() {
        return this.tone;
    }

    constructor(notation, alteration, idx: number[]) 
    {
        this.code = `N${idx[0]}${idx[1]}`
        this.namesObj = notation;
        this.tone = notation.tone + alteration.tone;
        this.alterationObj = alteration;
        this.name = notation.code;
        this.alteration = alteration.code;
        this.blueprint = notation.code;
    }
    
}