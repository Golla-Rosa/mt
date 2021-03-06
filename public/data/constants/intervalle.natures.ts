import { Notation } from "src/notation/notation.schema";
import { Notations } from "../../seeder/obj/notations";

export const INTERVAL_NATURES: Notation[] = [
    {
        code: "NA0",
        english: "Juste",
        latin: "Juste",
        tone: 0
    },
    {
        code: "NA1",
        english: "Majeur",
        latin: "Majeur",
        tone: 0
    },
    {
        code: "NA2",
        english: "Augmented",
        latin: "Augmenté",
        tone: 0.5
    },
    {
        code: "NA3",
        english: "Mineur",
        latin: "Mineur",
        tone: -0.5
    },
    {
        code: "NA4",
        english: "Diminished",
        latin: "Diminué",
        tone: -1
    },
   
]
