import { Breed } from "./breed";

export class Horse {
    constructor(
        private id: number,
        private imageUrl: string,
        private dateOfBirth: number,
        private shortName: string,
        private fullName: string,
        private gender: string,
        private breed: Breed
    ) { }
    
    getId(): number {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getImageUrl(): string {
        return this.imageUrl;
    }

    setImageUrl(imageUrl: string) {
        this.imageUrl = imageUrl;
    }

    getDateOfBirth(): number {
        return this.dateOfBirth;
    }

    setDateOfBirth(dateOfBirth: number) {
        this.dateOfBirth = dateOfBirth;
    }

    getShortName(): string {
        return this.shortName;
    }

    setShortName(shortName: string) {
        this.shortName = shortName;
    }

    getFullName(): string {
        return this.fullName;
    }

    setFullName(fullName: string) {
        this.fullName = fullName;
    }

    getGender(): string {
        return this.gender;
    }

    setGender(gender: string) {
        this.gender = gender;
    }

    getBreed(): Breed {
        return this.breed;
    }

    setBreed(breed: Breed) {
        this.breed = breed;
    }
}
