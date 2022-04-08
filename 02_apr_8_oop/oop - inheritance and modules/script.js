import { Book } from "./Book.js";
import { AudioBook } from "./AudioBook.js";

const bok1 = new Book('Steven King', 664, 'institutet');
console.log(bok1);
bok1.turnPage(1);

const aBook = new AudioBook('Astrid Lindgren', 'Bröderna Lejonhjärta', 'Astrid Lindgren', 3);
console.log(aBook);

aBook.play();
aBook.turnPage(20);
