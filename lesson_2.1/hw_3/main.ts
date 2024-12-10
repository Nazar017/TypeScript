type Author = {
    name: string;
    age: number;
}
type Book = {
    title: string;
    pageCount: number;
    genre: string;
    authors:Author[];
};

let harryPotterObj:Book = {
    title: "Harry Potter",
    pageCount: 1000,
    genre: "Fantasy",
    authors: [
        {name: "David", age: 32},
        {name: "Nazar", age: 47},
    ]
}

let hobbitObj:Book = {
    title: "The Hobbit",
    pageCount: 310,
    genre: "Fantasy",
    authors: [
        {name: "David", age: 79},
        {name: "Andrew", age: 82},
    ]
};

let prideObj:Book = {
    title: "Pride and Prejudice",
    pageCount: 279,
    genre: "Romance",
    authors: [
        {name: "David", age: 92},
        {name: "Nazar", age: 54},
        {name: "Andrew", age: 62},
    ]

};
console.log(harryPotterObj, hobbitObj, prideObj);
