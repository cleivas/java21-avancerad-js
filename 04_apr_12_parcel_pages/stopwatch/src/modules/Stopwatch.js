export class Stopwatch{
    #time = 0;
    #running = false;
    #intervalID;

    constructor(){

    }
    isRunning(){
        return this.#running;
    }
    start(){
        this.#time = 0;
        document.querySelector('p').innerText = this.#time;
        this.#intervalID = setInterval(this.#update.bind(this), 1000);
        this.#running = true;
    }
    stop(){
        clearInterval(this.#intervalID);
        this.#running = false;
    }

    #update(){
        this.#time++;
        document.querySelector('p').innerText = this.#time;
    }
}