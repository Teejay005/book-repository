export enum Category {
    Drama = "Drama",
    Comedy = "Comedy",
    Sport = "Sport"
}

export class Book {
    constructor(title: string, category: Category, description: string) {
        this.title = title;
        this.category = category;
        this.description = description;
    }
    title: string;
    category: Category;
    description: string;
}