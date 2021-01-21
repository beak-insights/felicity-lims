import { IPatient } from './model';

export class State {
    patient: IPatient | null = null;
    patients: IPatient[] = [];
}