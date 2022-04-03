import { Notations } from "./notations";

export interface BP {
    code: string;
    type: Notations;
    nature: Notations;
    name: string;

  //  getName():string;
    
}

export class Blueprint implements BP {
    code: string;
    type: Notations;
    nature: Notations;
    name: string;

    getName(): string {
        return "Blueprint => Get Name : TO BE IMPLEMENTED"
    }
}