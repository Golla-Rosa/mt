import { BP_Interval } from "./interval.gap";
import { Notations } from "./notations";
import { Note } from "./note";
import { Blueprint, BP } from "./blueprint";

export class BP_Scale implements BP {
    code: string;
    name: string;
    tone: number[] = [];
    
    type: Notations;
    nature: Notations;
        
    //names: Notations;
    //notes: Note[] = [];


    getName(): string {
        throw new Error("Method not implemented.");
    }
   // gaps: Gap[];
    //tone: number;
    // nature: Notations;

}