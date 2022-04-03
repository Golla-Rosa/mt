import { Blueprint, BP } from "./blueprint";
import { Notations } from "./notations";

export class BP_Interval implements BP {
    code: string;
    name: string;
    tone: number;
    type: Notations;
    nature: Notations;
    
    constructor(nature, type, idx: number[]) {
        this.code = `IG${idx[0]}${idx[1]}`;
        this.nature = nature;
        this.type = type;
        this.tone = type.tone + nature.tone;
        this.name = `${type.english} ${nature.english}`;
    }
    getName(): string {
        return this.name;
    }

    getTone() : number {
        return this.tone;
    }
}