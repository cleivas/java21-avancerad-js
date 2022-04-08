export class Book{
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