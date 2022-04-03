import { Notation } from "src/notation/notation.schema";
import { Notations } from "src/seeder/obj/notations";
import { BP_Chord } from "../../seeder/obj/chord.gap";
import { BP_Scale } from "../../seeder/obj/scale.gap";

export const SCALE_SHAPES : BP_Scale[] = [
    {
        code: "SS01",
        name: "Majeur mélodique",
        tone: [1, 1, 0.5, 1, 1, 1, 0.5],
        type: null,
        nature: null,
        getName: null,
    },
    {
        code: "SS02",
        tone: [1, 1, 0.5, 1, 0.5, 1.5, 0.5],
        name: "Majeur harmonique",
        type: null,
        nature: null,
        getName: null,
    },
    {
        code: "SS03",
        tone: [1, 0.5, 1, 1, 1, 1, 0.5],
        name: "Mineur harmonique",
        type: null,
        nature: null,
        getName: null,
    },
    {
        code: "SS04",
        tone: [1, 0.5, 1, 1, 0.5, 1.5, 0.5],
        name: "Majeur mélodique",
        type: null,
        nature: null,
        getName: null,
    }
]