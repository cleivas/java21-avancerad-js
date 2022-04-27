import {useState} from "react";
export default function Conditionals(){
    const [loggedIn, setLoggedIn] = useState(true);
    function handleClick(){
        setLoggedIn(!loggedIn);
    }

    const temp = 15;

    return (<>
       {loggedIn ? <h1>Logged In</h1>:<h1>Logged Out</h1>}
       <button onClick={handleClick}>Toggle</button>

       {temp>20 ? <h4>Det är varmt!</h4>:<h2>Det är kallt</h2>}
    </>)
}