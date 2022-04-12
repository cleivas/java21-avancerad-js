import {Stopwatch} from './modules/Stopwatch.js'

const sw = new Stopwatch();
console.log(sw);

document.querySelector('button').addEventListener('click', toggleStopWatch);

function toggleStopWatch(){
    if(sw.isRunning()){
        sw.stop();
        document.querySelector('button').innerText = 'Start';
    }
    else{
        sw.start();
        document.querySelector('button').innerText = 'Stop';
    }
}