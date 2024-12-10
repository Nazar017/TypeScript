type Book = {
    title: string;
    pageCount: number;
    genre: string;
};

let harryPotterObj: Book = {
    title: "Harry Potter",
    pageCount: 1000,
    genre: "Fantasy"
}

let hobbitObj: Book = {
    title: "The Hobbit",
    pageCount: 310,
    genre: "Fantasy"
};

let prideObj: Book = {
    title: "Pride and Prejudice",
    pageCount: 279,
    genre: "Romance"
};

console.log(harryPotterObj, hobbitObj, prideObj);