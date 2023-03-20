class book {
    constructor(title, author, genre,){
        this.title = title;
        this.author = author;
        this.genre = genre;
    }
}


class shelf {
    constructor(){
        this.book = []
        this.tchotchkes = [];
    }
    addBook(book) {
        this.book.push(book)
    }
    addTchotchke(tchotchke){
        this.tchotchkes.push(tchotchke)
    }
    findBook(title){
        return this.book.find((book) => { return book.title == title})
    }
}

const lordOfTheRings = new book("Lord of The Rings: Return of the King", "JRR Tolkien", "fantasy");
const catcherInTheRye = new book("Catcher in the Rye", "JD Salinger", "fiction");
const dune = new book("Dune", "Frank Herbert", "sci-fi")


const topShelf = new shelf(1);
topShelf.addBook(lordOfTheRings);
topShelf.addBook(catcherInTheRye);
topShelf.addBook(dune);
console.log(topShelf.findBook("Dune"))