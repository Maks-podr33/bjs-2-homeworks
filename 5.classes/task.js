class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(newState) {
        this._state =
            (newState < 0 ? 0 : newState) && (newState > 100 ? 100 : newState);
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = String(name);
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let findBookBy = this.books.find((book) => book[type] === value);
        return findBookBy == undefined ? null : findBookBy;
    }

    // giveBookByName(bookName) {
    //     let giveIndex = this.books.findIndex(book => book.name === bookName);
    //     if (giveIndex !== -1) {
    //         let giveBook = Object.assign(this.books[giveIndex]);
    //         this.books.splice(giveIndex, 1);
    //         return giveBook;
    //     }
    //     return null;
    // }
    giveBookByName(bookName) {

        const book = this.findBookBy("name", bookName);

        if (!book) return null;

        this.books = this.books.filter((item) => item.name !== bookName);

        return book;

    }   


}


const library = new Library("Библиотека имени Ленина");

library.addBook(
    new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
    )
);

library.addBook(
    new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
    )
);

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец"));
console.log(library.findBookBy("releaseDate", 1924));

console.log("Количество книг до выдачи: " + library.books.length);
const issuedBook = library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length);

issuedBook.state = 20;

library.addBook(issuedBook);

console.log("Количество книг после возвращения: " + library.books.length);