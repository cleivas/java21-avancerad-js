export function displayName(dog){
    const hue = Math.round( Math.random()*360 ); //Ger ett random number mellan 0 och 360

    const h1 = document.createElement('h1');
    h1.style.backgroundColor = `hsl(${hue}, 60%, 80%)`;
    h1.innerText = dog.name;

    document.body.append(h1);
}

export function displayH1(amount, hue){

    for(let i=0; i<amount; i++){
        const h1 = document.createElement('h1');
        h1.style.color = `hsl(${hue}, 85%, 50%)`;
        h1.innerText = i+1;
        document.body.append(h1);
    }

}