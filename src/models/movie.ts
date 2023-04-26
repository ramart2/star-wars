export default class Movie {
    id: number;
    title: string;
    releaseDate: string;
    openingText: string;

    constructor(id: number, title: string, releaseDate: string, openingText: string) {
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this.openingText = openingText;
    }
}