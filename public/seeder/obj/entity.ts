export interface Entity {
    code: string;
    name: string;
    tone: number | number [];
    
    getName(): string;

    getTone(): number| number[];
}

