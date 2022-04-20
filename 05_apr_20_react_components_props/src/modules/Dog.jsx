function Dog({name, age}){
    return (
        <div>
            <h1>My name is {name}.</h1>
            <p>Jag är {14+(age-1)*7} människoår gammal.</p>
        </div>
    );
}

export default Dog;