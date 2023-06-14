import { Breed } from "./breed";

export class Horse {
    constructor(
        private id: number,
        private dateOfBirth: number,
        private shortName: string,
        private fullName: string,
        private gender: string,
        private breed: Breed
    ) {}
}
