import { Breed } from "./breed";

export interface Horse {
    id: number,
    shortName: string,
    fullName: string,
    dateOfBirth: number,
    gender: string,
    breed: Breed,
    imageUrl: string
}
