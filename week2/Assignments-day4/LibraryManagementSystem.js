class Book {
    title;
    author;
    pages;
    isAvailable;

    constructor(title, author, pages, isAvailable) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable; 
    }

    borrow() {
         this.isAvailable = false;     
    }

    returnBook() {
        this.isAvailable = true;
        
    }

    getInfo() {
        return `${this.title} is written by ${this.author}. It has ${this.pages} pages.`;
    }

    isLongBook() {
        return this.pages > 300;
    }
}


let b1 = new Book("Harry Potter", "Anirudh", 500, true);
let b2 = new Book("Heal Yourself", "Surya", 130, true);
let b3 = new Book("Atomic Habits", "John Ibrahim", 120, false);
let b4 = new Book("Ikigai", "Adolf Hitler", 400, true);
let b5 = new Book("The Intelligent Investor", "Stephen Hawking", 560, true);
let library=[b1,b2,b3,b4,b5];

console.log("all booos displaying");
for(let bookInLib of library)
{
    console.log(bookInLib)
}

b1.borrow();
b3.borrow();
for(let showAvail of library)
{
    console.log(`${showAvail.title} book  is ${showAvail.isAvailable}`)
}
b1.returnBook();
console.log(`${b1.title} is now ${b1.isAvailable}`);
let longBook = library.filter((element)=> element.isLongBook)
console.log(longBook);
let showAvail=library.filter((element)=>element.isAvailable)
console.log(showAvail);

