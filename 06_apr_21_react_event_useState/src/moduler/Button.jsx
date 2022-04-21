import {useState} from "react";

function Button(props){
    let styleObj = {
        backgroundColor: 'lightblue',
        color: 'royalblue'
    }
    const [text, setText ] = useState(props.text);
    const [style, setStyle] = useState(styleObj)

    function click(){
        //funktionen changeClass i App-komponenten anropas eftersom props.changeParentClass inehåller den funktionen
        props.changeParentClass(props.text); 
    }
    function enter(){
        // setText('Enter');
        setStyle({
            backgroundColor: 'royalblue',
            color: 'lightblue'
        })
    }
    function leave(){
        // setText('Leave');
        setStyle({
            backgroundColor: 'lightblue',
            color: 'royalblue'
        })
    }
    return <button style={style} onClick={ click } onMouseEnter={enter}  onMouseLeave={leave}> {text} </button>
}

export default Button;