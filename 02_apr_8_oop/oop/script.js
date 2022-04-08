//Övning 1
//Visa alla metoder som finns på arrayer och strings genom att logga prototypobjektet för respektive
const str = 'Det här är en string';
console.log( Object.getPrototypeOf( str ) );
const arr = [1, 4, 6, 3, 6];
console.log( Object.getPrototypeOf( arr ));

//Övning 2
//Car - make, model, year
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

Car.prototype.start = function(){
    console.log(this.model, 'wroom');
}
Car.prototype.soundHorn = 'honk';

const car1 = new Car('Toyota', 'Corolla', 1999);
const car2 = new Car('Ford', 'Mondeo', 1999);

car1.windows = 'electric';

console.log(car1, car2);
car1.start();
car2.start();
console.log( car1.soundHorn, car2.soundHorn)

//Övning 3
//Book - Author, pages, title
class Book{
    constructor(author, pages, title){
        this.author = author;
        this.pages = pages;
        this.title = title;
        this.currentPage = 0;
    }

    turnPage(numberOfPages){
        this.currentPage+=numberOfPages;
        console.log('You are on page ', this.currentPage, 'in ', this.title);
    }
}

const book1 = new Book('Carl Marx', 900, 'Das Kapital');
const book2 = new Book('Hjalmar Söderberg', 28, 'Pälsen');

console.log(book1, book2);
book1.turnPage(2);
book2.turnPage(27);
console.log('---------------')

//Övning 4 - encapsulation
// RedditUser - username, password, karma

class RedditUser{
    #username;
    #password;
    #karma;
    posts = [1, 2, 3];
    sayHi = function(){
        console.log('hello!');
    }
    constructor(username, password){
        this.#username = username;
        this.#password = password;
        this.#karma = 0;
    }
    getUsername(){
        return this.#username;
    }
    setPassword(newPassword){
        this.#password = newPassword;
    }
    getKarma(){
        return this.#karma;
    }
    #setKarma(amount){
        this.#karma += amount;
    }
    increaseKarma(){
        this.#setKarma(1);
    }
    decreaseKarma(){
        this.#setKarma(-1);
    }
}

const user1 = new RedditUser('costanza', '1234');
console.log(user1.getUsername());
user1.setPassword('4321')
console.log(user1);
user1.increaseKarma();
console.log(user1.getKarma());
user1.decreaseKarma();
console.log(user1.getKarma());
console.log(user1.posts);
user1.sayHi();
