class PrintEditionItem{
    constructor(name,releaseDate,pagesCount, value) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
        this.value = value;
    }
    fix(){
        this.state *= 1.5;
    }

    set state(value){
        if(value < 0){
            this.state = 0;
        } else if (value > 100){
            this.state = 100;
        } else{
            this._state = value;
        }
    }
    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "book";
        this.author = author;
    }
}
class NovelBook extends  Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "novel";
    }
}
class FantasticBook extends  Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "fantastic";
    }
}
class DetectiveBook extends  Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(key, value) {
        const found = this.books.find(element => element.key === value);
        if (found === undefined) {
            return null;
        } else {
            return found;
        }
    }

    giveBookByName(bookName) {
        let tmpI = this.books.name.indexOf(bookName);
        if(tmpI === -1){
            return null;
        } else {
            let tmp = this.books[tmpI];
            this.books.splice(tmpI, 1);
            return tmp;
        }
    }

}
//дз 3

class Student{
    constructor(name) {
    this.name = name;
    }

    addMark(mark, subjectName) {
        if (mark > 5 || mark < 1){
            console.log("Ошибка, оценка должна быть числом от 1 до 5");
        }
        let newMark = {
            subjectName: subjectName,
            mark: mark
        };
    if (this.marks === undefined) {
        this.marks = [newMark];
    } else {
        this.marks.push(newMark);
        }
    }

    getAverage() {
    let sum = 0;
    let Average;
    for (let mark of this.marks) {
        sum += mark;
    }
    Average = sum / this.marks.length;
    return Average;
    }

    getAverageBySubject(subjectName) {
        let sum = 0;
        let kol = 0;
        let Average;
        for (let mark of this.marks) {
            if (subjectName === this.marks.subjectName) {
                sum += mark;
                ++kol;
            }
            Average = sum / kol;
            return Average;
        }
    }

    exclude(reason) {
    delete this.subjectName;
    delete this.marks;
    this.reason = reason;
}


}
