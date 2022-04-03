import { Blueprint, BP } from "./blueprint";
import { BP_Interval } from "./interval.gap";
import { Notations } from "./notations";
import { Note } from "./note";

export class BP_Chord implements BP
{
    type: Notations;
    nature: Notations;
    code: string;
    name: string;
    gaps: string[] = []; 
    // BP_Interval[];
    // names: Notations;
    // libelleProvisoire: string;
    // notes: Note[] = [];

    constructor(nature, intervalBlueprints,  idx: number) {
        this.code = `AC${idx}`;
        this.nature = nature;

        switch (nature.code) {
            case "NA1":
                this.gaps = [
                    intervalBlueprints.find(g => g.nature.code == "NA1" && g.type.code == "IT2")?.code,
                    intervalBlueprints.find(g => g.nature.code == "NA3"  && g.type.code == "IT2")?.code,
                ];
                break;
            case "NA2":
                this.gaps = [
                    intervalBlueprints.find(g => g.nature.code == "NA1" && g.type.code == "IT2")?.code,
                    intervalBlueprints.find(g => g.nature.code == "NA1" && g.type.code == "IT2")?.code,
                ];
                break;
            case "NA3":
                this.gaps = [
                    intervalBlueprints.find(g => g.nature.code == "NA3" && g.type.code == "IT2")?.code,
                    intervalBlueprints.find(g => g.nature.code == "NA1" && g.type.code == "IT2")?.code,
                ];
                break;
            case "NA4":
                this.gaps = [
                    intervalBlueprints.find(g => g.nature.code == "NA3" && g.type.code == "IT2")?.code,
                    intervalBlueprints.find(g => g.nature.code == "NA3" && g.type.code == "IT2")?.code,
                ];
                break;
            case "NA0": return;
        }
    }

    getName(): string {
        return this.nature.english
    }
}