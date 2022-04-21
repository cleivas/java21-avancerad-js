import ReactDOM from "react-dom/client";
import {useState} from "react";
import Button from "./moduler/Button";
import Clock from "./moduler/Clock";

function App(){
    const [cssClass, setClass] = useState('no-background');
    
    function changeClass(newClass){
        setClass(newClass);
    }
    
    return(
        <div className='wrapper'>
            <Clock classNametoChange={cssClass} />
            <Button changeParentClass={changeClass} text='hotpink'/>
            <Button changeParentClass={changeClass} text='royalblue'/>
            <Button changeParentClass={changeClass} text='violet'/>
        </div>
    );

}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App/>);