import { useState } from "react";

export default function NameForm() {
    let name = '';
    const [stateName, setStateName] = useState('');

    function handleClick(event) {
        event.preventDefault();
        console.log("Submitted");

        setStateName(name);
    }

    function handleChange(event) {
        name = event.target.value;
        console.log(event.target.value);
    }

    return (
        <>
            <form>
                <input type="text" placeholder="Name" onChange={handleChange}></input>
                <button onClick={handleClick}>Submit</button>
            </form>
            <h1>{stateName}</h1>
        </>
    )
}