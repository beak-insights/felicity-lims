export interface IPatient {
    firstName?: string,
    lastName?: string,
    clientName?: string,
    provinceName?: string,
    age?: number,
    gender?: string,
    patientId?:string,
    clientPatientId?: string,
}

export class Patient implements IPatient {
    constructor( 
        public firstName?: string,
        public lastName?: string,
        public clientName?: string,
        public provinceName?: string,
        public age?: number,
        public gender?: string,
        public patientId?:string,
        public clientPatientId?: string,
    ) {}
}