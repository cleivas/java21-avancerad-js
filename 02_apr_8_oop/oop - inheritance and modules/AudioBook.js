import { Book } from "./Book.js";

export class AudioBook extends Book{
    constructor(author, title, narrator, playTime){
        super(author, undefined, title);
        this.narrator = narrator;
        this.playTime = playTime;
    }
    play(){
        console.log(this.narrator, ' says ', this.title);
    }
}

