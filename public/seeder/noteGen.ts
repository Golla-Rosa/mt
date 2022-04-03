import { Note } from "./obj/note";
import { NOTATION_LIST } from "../data/constants/notations.list"
import { ALTERATION_LIST } from "../data/constants/alterations.list";
import { Intervalle } from "./obj/intervalle";
import { BP_Interval } from "./obj/interval.gap";
import { INTERVAL_TYPES } from "../data/constants/intervalle.types";
import { INTERVAL_NATURES } from "../data/constants/intervalle.natures";
import { BP_Chord } from "./obj/chord.gap";
import { Chord } from "./obj/chord";
import { BP_Scale } from "./obj/scale.gap";
import { SCALE_SHAPES } from "../data/constants/basic.scales";
import { Scale } from "./obj/scale";

export class NotesGenerator {
    // note management
    notes: Note[];

    // interval entities
    intervalBlueprints: BP_Interval[];
    intervals: Intervalle[];

    // chord entities
    chordShapes: BP_Chord[];
    chords: Chord[];

    // scale entities
    scalesMold: BP_Scale[];
    scales: Scale[];

    constructor() {
        this.manageNotes();        
        this.manageIntervals();
        this.manageChords();
        this.manageScales();

        this.printAllEntities();
    }
    

    printAllEntities() {
        // console.log(this.notes.map(n => n.getName()))
        // console.log(this.intervals.map(n => n.getName()))
        // console.log(this.chords.map(n => n.getName()))
        // console.log(this.scales.map(n => n.getName()))
        // console.log(this.scales.map(n => n.getTone()))
    }
    // Note management
    manageNotes() {
        this.notes = this.generateNotes();
    }

    generateNotes(): Note[] {
        var noteList: Note[] = [];
        for (let i = 0; i < NOTATION_LIST.length; i++) {
            const notation = NOTATION_LIST[i];
            for (let x = 0; x < ALTERATION_LIST.length; x++) {
                const alteration = ALTERATION_LIST[x];
                const note: Note = new Note(notation, alteration, [i, x]);
                
                if ((i === 0 || i === 2.5 || i ===2 || i === 5.5) && alteration.signe !== '')
                    continue;
                noteList.push(note)
            }
        }
        return noteList;
    }


    // Interval management
    manageIntervals() {
        this.intervalBlueprints = this.generateGaps();
        this.intervals = this.generateIntervals();
        return;
    }

    generateGaps(): BP_Interval[] {
        var intervalBlueprints: BP_Interval[] = []
        for (let i = 0; i < INTERVAL_TYPES.length; i++) {
            const intervalType = INTERVAL_TYPES[i];
            for (let x = 0; x < INTERVAL_NATURES.length; x++) {
                const intervalNature = INTERVAL_NATURES[x];
                const gap: BP_Interval = new BP_Interval(intervalNature, intervalType, [i, x]);

                intervalBlueprints.push(gap);
            }
        }
        return intervalBlueprints;
    }

    generateIntervals(): Intervalle[]  {
        var intervals: Intervalle[] = [];
        for (let i = 0; i < this.notes.length; i++) {
            const note = this.notes[i];
            for (let x = 0; x < this.intervalBlueprints.length; x++) {
                const gap = this.intervalBlueprints[x];
                const interval: Intervalle = new Intervalle(note, gap, this.notes, [i, x]);

                intervals.push(interval)
            }
        }
        return intervals;
    }

    // Chord management
    manageChords() {
        this.chordShapes = this.generateChordShapes();
        this.chords = this.generateChords();
    }

    generateChords() : Chord[] {
        var chords: Chord[] = [];
        for (let i = 0; i < this.notes.length; i++) {
            const note = this.notes[i];
            for (let x = 0; x < this.chordShapes.length; x++) {
                const chordShape = this.chordShapes[x];
                var chord = new Chord();
                chord.code = `CH${i}${x}`
                chord.blueprint = chordShape.code;
                const firstInterval = this.intervals.find(i => 
                        i.getTone()[0] == note.tone 
                        && i.blueprint === chordShape.gaps[0]
                    );
                if (firstInterval) {
                    const secondInterval = this.intervals.find(i => 
                        i.getTone()[0] == firstInterval?.getTone()[1] 
                        && i.blueprint === chordShape.gaps[1]
                    );
                chord.intervals.push(firstInterval.code, secondInterval?.code)
                chord.name = note.getName() + " " + chordShape.getName();
                chords.push(chord);
                        console.log(chord.getTone());
                }
            }
            
        }
        return chords;
    }

    generateChordShapes(): BP_Chord[] {
        var bp_chords: BP_Chord[] = [];
        for (let i = 0; i < INTERVAL_NATURES.length; i++) {
            const nature = INTERVAL_NATURES[i];

            var accord: BP_Chord = new BP_Chord(nature, this.intervalBlueprints, i);
            
            bp_chords.push(accord);
        }
        return bp_chords;
    }


    // Scale management
    manageScales() {
        this.scalesMold = this.generateScaleMolds();
        this.scales = this.generateScales();
    }

    generateScales() {
        var scales: Scale[] = [];
        for (let i = 0; i < this.notes.length; i++) {
            const note = this.notes[i];
            for (let x = 0; x < this.scalesMold.length; x++) {
                var sMold = this.scalesMold[x];
                console.log(sMold.tone)
                var scale: Scale = new Scale();
                scale.code = `SM${x}${i}`
                scale.setTones(sMold.tone, note)
                scale.name = `${note.getName()} ${sMold.name}`
                scales.push(scale);
            }

        }
        return scales;
    }

    generateScaleMolds(): BP_Scale[] {
        var scales: BP_Scale[] = [];
        
        for (let i = 0; i < SCALE_SHAPES.length; i++) {
            const scaleShap = SCALE_SHAPES[i];
            var { tone } = scaleShap;
            for (let x = 0; x < tone.length; x++) {
                var scale: BP_Scale = new BP_Scale() 
                scale.code = `SM${x}${i}`;
                // console.log(tone);

                scale.tone = [...tone];
                scale.type = scaleShap.type;
                scale.nature = scaleShap.nature;
                scale.name = scaleShap.name + x;
                scales.push(scale);
                tone.push(tone.shift())
                // this.ArrayMove(tone, 0, tone.length - 1)
            }
        }
        return scales;
    }

    ArrayMove(array : number[], from, to): number[] {
        return array.splice(to, 0, array.splice(from, 1)[0])
    }
}